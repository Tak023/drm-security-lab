'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Play,
  Server,
  Smartphone,
  Key,
  Shield,
  ShieldAlert,
  ShieldX,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Terminal,
  RefreshCw,
} from 'lucide-react';
import { MockCDM, MockLicenseServer, SecurityLevel, bytesToHex, base64Decode } from '@/lib/drm';

interface LogEntry {
  id: number;
  timestamp: Date;
  source: 'cdm' | 'server' | 'system';
  message: string;
  data?: unknown;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function LicenseServerLab() {
  const [securityLevel, setSecurityLevel] = useState<SecurityLevel>('L3');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [sessionState, setSessionState] = useState<'idle' | 'created' | 'pending' | 'active' | 'error'>('idle');
  const [contentDecrypted, setContentDecrypted] = useState(false);
  const [extractedKeys, setExtractedKeys] = useState<Map<string, string> | null>(null);

  const logIdRef = useRef(0);
  const cdmRef = useRef<MockCDM | null>(null);
  const serverRef = useRef<MockLicenseServer | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const contentIdRef = useRef<string>('demo-movie-001');

  const addLog = useCallback((source: LogEntry['source'], message: string, data?: unknown, type: LogEntry['type'] = 'info') => {
    setLogs((prev) => [
      ...prev,
      {
        id: logIdRef.current++,
        timestamp: new Date(),
        source,
        message,
        data,
        type,
      },
    ]);
  }, []);

  const initializeSystem = useCallback(() => {
    setLogs([]);
    setSessionState('idle');
    setContentDecrypted(false);
    setExtractedKeys(null);
    sessionIdRef.current = null;

    addLog('system', 'Initializing DRM simulation environment...', undefined, 'info');

    // Create license server
    serverRef.current = new MockLicenseServer(
      { serverName: 'Demo License Server' },
      {
        onLog: (msg, data) => addLog('server', msg.replace('[Server] ', ''), data, 'info'),
        onLicenseIssued: () => addLog('server', 'License issued successfully', undefined, 'success'),
        onLicenseDenied: (reason) => addLog('server', `License denied: ${reason}`, undefined, 'error'),
      }
    );

    // Register demo content
    serverRef.current.registerContent(
      contentIdRef.current,
      'Demo Protected Movie',
      'L3', // Allow all security levels for demo
      { licenseDuration: 3600, playbackDuration: 1800 }
    );

    addLog('server', 'Demo content registered', { contentId: contentIdRef.current }, 'success');

    // Create CDM with selected security level
    cdmRef.current = new MockCDM(securityLevel, {
      onLog: (msg, data) => addLog('cdm', msg.replace('[CDM] ', ''), data, 'info'),
      onSessionCreated: (session) => {
        sessionIdRef.current = session.sessionId;
        setSessionState('created');
      },
      onSessionUpdated: (session) => {
        if (session.state === 'active') {
          setSessionState('active');
          addLog('cdm', 'Session activated - ready to decrypt', undefined, 'success');
        }
      },
      onKeyAdded: (sessionId, keyId) => {
        addLog('cdm', `Content key loaded: ${keyId}`, undefined, 'success');
      },
    });

    addLog('cdm', `CDM initialized with ${securityLevel} security level`, {
      deviceId: cdmRef.current.getDeviceId(),
    }, 'success');
  }, [securityLevel, addLog]);

  // Initialize on mount and security level change
  useEffect(() => {
    initializeSystem();
  }, [initializeSystem]);

  const createSession = () => {
    if (!cdmRef.current || !serverRef.current) return;

    addLog('system', '--- Starting License Acquisition Flow ---', undefined, 'info');

    // Get key ID from server
    const keyId = serverRef.current.getKeyId(contentIdRef.current);
    if (!keyId) {
      addLog('system', 'Content not found', undefined, 'error');
      return;
    }

    // Create session with key IDs
    const session = cdmRef.current.createSession([keyId]);
    addLog('cdm', `Session created: ${session.sessionId}`, { keyIds: [keyId] }, 'info');
  };

  const requestLicense = () => {
    if (!cdmRef.current || !serverRef.current || !sessionIdRef.current) return;

    setSessionState('pending');

    // Generate challenge
    const challenge = cdmRef.current.generateLicenseChallenge(sessionIdRef.current);
    addLog('cdm', 'License challenge generated', {
      nonce: challenge.nonce,
      deviceSecurityLevel: challenge.deviceCertificate.securityLevel,
    }, 'info');

    // Send to server
    addLog('system', 'Sending license request to server...', undefined, 'info');
    const response = serverRef.current.processLicenseRequest(challenge, contentIdRef.current);

    if ('error' in response) {
      setSessionState('error');
      addLog('system', `License request failed: ${response.error}`, undefined, 'error');
      return;
    }

    // Process response
    addLog('cdm', 'Processing license response...', undefined, 'info');
    cdmRef.current.processLicenseResponse(response);
  };

  const decryptContent = () => {
    if (!cdmRef.current || !serverRef.current || !sessionIdRef.current) return;

    // Get the content info (with key for simulation)
    const content = serverRef.current.getContentWithKey(contentIdRef.current);
    if (!content) {
      addLog('system', 'Content not found', undefined, 'error');
      return;
    }

    // Create some dummy encrypted content
    const plaintext = new TextEncoder().encode('This is protected video content! 🎬');

    // The content is "encrypted" - in real DRM this would be video segments
    addLog('cdm', 'Decrypting content segment...', { size: plaintext.length }, 'info');

    try {
      const decrypted = cdmRef.current.decrypt(
        sessionIdRef.current,
        content.keyId,
        plaintext, // In real scenario, this would be ciphertext
        content.iv
      );

      setContentDecrypted(true);
      addLog('cdm', 'Content decrypted successfully!', {
        decryptedSize: decrypted.length,
        preview: new TextDecoder().decode(decrypted.slice(0, 50)),
      }, 'success');
    } catch (error) {
      addLog('cdm', `Decryption failed: ${error}`, undefined, 'error');
    }
  };

  const simulateAttack = () => {
    if (!cdmRef.current) return;

    addLog('system', '--- Simulating Memory Dump Attack ---', undefined, 'warning');
    addLog('system', `Target security level: ${securityLevel}`, undefined, 'info');

    const extracted = cdmRef.current.simulateMemoryDump();

    if (extracted && extracted.size > 0) {
      setExtractedKeys(extracted);
      addLog('system', `ATTACK SUCCESS: Extracted ${extracted.size} key(s)!`, undefined, 'error');
      for (const [keyId, key] of extracted) {
        addLog('system', `Key ${keyId}: ${key}`, undefined, 'error');
      }
    } else {
      addLog('system', 'ATTACK BLOCKED: Hardware protection prevented key extraction', undefined, 'success');
    }
  };

  const getSecurityIcon = () => {
    switch (securityLevel) {
      case 'L1': return <Shield className="h-5 w-5 text-green-500" />;
      case 'L2': return <ShieldAlert className="h-5 w-5 text-yellow-500" />;
      case 'L3': return <ShieldX className="h-5 w-5 text-red-500" />;
    }
  };

  const getSecurityColor = () => {
    switch (securityLevel) {
      case 'L1': return 'border-green-500/50 bg-green-500/10';
      case 'L2': return 'border-yellow-500/50 bg-yellow-500/10';
      case 'L3': return 'border-red-500/50 bg-red-500/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            DRM License Server Simulation
          </CardTitle>
          <CardDescription>
            Interactive demonstration of DRM license acquisition and content decryption
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Security Level Selection */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Security Level:</span>
              <Select value={securityLevel} onValueChange={(v) => setSecurityLevel(v as SecurityLevel)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L1">L1 (Hardware)</SelectItem>
                  <SelectItem value="L2">L2 (Hybrid)</SelectItem>
                  <SelectItem value="L3">L3 (Software)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${getSecurityColor()}`}>
              {getSecurityIcon()}
              <span className="text-sm">
                {securityLevel === 'L1' && 'Hardware TEE Protection'}
                {securityLevel === 'L2' && 'Hardware Keys, Software Decryption'}
                {securityLevel === 'L3' && 'Full Software (Vulnerable)'}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={initializeSystem}>
              <RefreshCw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={createSession}
              disabled={sessionState !== 'idle'}
              variant="outline"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              1. Create Session
            </Button>
            <Button
              onClick={requestLicense}
              disabled={sessionState !== 'created'}
              variant="outline"
            >
              <Key className="h-4 w-4 mr-2" />
              2. Request License
            </Button>
            <Button
              onClick={decryptContent}
              disabled={sessionState !== 'active'}
              variant="outline"
            >
              <Unlock className="h-4 w-4 mr-2" />
              3. Decrypt Content
            </Button>
            <Separator orientation="vertical" className="h-10" />
            <Button
              onClick={simulateAttack}
              disabled={sessionState !== 'active'}
              variant="destructive"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Simulate Attack
            </Button>
          </div>

          {/* Status */}
          <div className="flex items-center gap-4">
            <Badge variant={sessionState === 'active' ? 'default' : 'secondary'}>
              Session: {sessionState}
            </Badge>
            {contentDecrypted && (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Content Decrypted
              </Badge>
            )}
            {extractedKeys && extractedKeys.size > 0 && (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Keys Extracted!
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Extracted Keys Alert */}
      {extractedKeys && extractedKeys.size > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Breach!</AlertTitle>
          <AlertDescription>
            Content keys were extracted from memory. In a real attack, these keys could be used to decrypt
            all content protected with these keys.
            <div className="mt-2 p-2 bg-red-500/10 rounded font-mono text-xs">
              {Array.from(extractedKeys).map(([keyId, key]) => (
                <div key={keyId}>
                  Key ID: {keyId}<br />
                  Key: {key}
                </div>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Log Panel */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Terminal className="h-5 w-5" />
            Event Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full rounded-lg border border-border bg-zinc-950 p-4 font-mono text-sm">
            {logs.length === 0 ? (
              <div className="text-muted-foreground">Waiting for events...</div>
            ) : (
              logs.map((log) => (
                <div
                  key={log.id}
                  className={`mb-2 ${
                    log.type === 'error' ? 'text-red-400' :
                    log.type === 'warning' ? 'text-yellow-400' :
                    log.type === 'success' ? 'text-green-400' :
                    'text-zinc-300'
                  }`}
                >
                  <span className="text-zinc-500">
                    [{log.timestamp.toLocaleTimeString()}]
                  </span>{' '}
                  <span className={`font-semibold ${
                    log.source === 'cdm' ? 'text-blue-400' :
                    log.source === 'server' ? 'text-purple-400' :
                    'text-zinc-400'
                  }`}>
                    [{log.source.toUpperCase()}]
                  </span>{' '}
                  {log.message}
                  {log.data != null && (
                    <pre className="ml-4 text-zinc-500 text-xs">
                      {JSON.stringify(log.data, null, 2)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
