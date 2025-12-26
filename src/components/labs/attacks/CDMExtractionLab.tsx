'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Play,
  AlertTriangle,
  Shield,
  Sword,
  Cpu,
  HardDrive,
  Key,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  Terminal,
  Bug,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { MockCDM, type SecurityLevel } from '@/lib/drm/mock-cdm';
import { MockLicenseServer } from '@/lib/drm/mock-license-server';
import { bytesToHex } from '@/lib/drm/crypto';

interface AttackStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'running' | 'success' | 'failed' | 'blocked';
  details?: string;
}

interface AttackLog {
  timestamp: number;
  type: 'info' | 'warning' | 'success' | 'error' | 'attack';
  message: string;
  data?: unknown;
}

export function CDMExtractionLab() {
  const { perspective } = usePerspective();
  const [targetLevel, setTargetLevel] = useState<SecurityLevel>('L3');
  const [attackSteps, setAttackSteps] = useState<AttackStep[]>([
    { id: 'identify', title: 'Identify CDM Type', description: 'Detect Widevine CDM version and security level', status: 'pending' },
    { id: 'locate', title: 'Locate CDM Binary', description: 'Find CDM library in browser/device memory', status: 'pending' },
    { id: 'attach', title: 'Attach Debugger', description: 'Attach to process and set breakpoints', status: 'pending' },
    { id: 'intercept', title: 'Intercept License', description: 'Capture license response before processing', status: 'pending' },
    { id: 'extract', title: 'Extract Keys', description: 'Dump decryption keys from memory', status: 'pending' },
    { id: 'verify', title: 'Verify Keys', description: 'Test extracted keys against encrypted content', status: 'pending' },
  ]);
  const [logs, setLogs] = useState<AttackLog[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [extractedKeys, setExtractedKeys] = useState<Map<string, string> | null>(null);

  const addLog = useCallback((type: AttackLog['type'], message: string, data?: unknown) => {
    setLogs(prev => [...prev, { timestamp: Date.now(), type, message, data }]);
  }, []);

  const updateStep = useCallback((stepId: string, status: AttackStep['status'], details?: string) => {
    setAttackSteps(prev => prev.map(step =>
      step.id === stepId ? { ...step, status, details } : step
    ));
  }, []);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runAttack = async () => {
    setIsRunning(true);
    setExtractedKeys(null);
    setAttackSteps(prev => prev.map(s => ({ ...s, status: 'pending', details: undefined })));
    setLogs([]);

    addLog('info', `Starting CDM extraction attack against ${targetLevel} device...`);
    addLog('warning', 'This is a simulation for educational purposes only');

    // Create mock CDM and license server
    const cdm = new MockCDM(targetLevel, {
      onLog: (msg, data) => addLog('info', msg, data),
    });
    const server = new MockLicenseServer({}, {
      onLog: (msg, data) => addLog('info', msg, data),
    });

    // Register test content
    const content = server.registerContent('test-movie', 'Test Movie', targetLevel);
    addLog('info', `Target content: ${content.title} (KeyID: ${content.keyId})`);

    // Step 1: Identify CDM
    updateStep('identify', 'running');
    await delay(1000);
    addLog('attack', `Detected CDM: Widevine ${targetLevel}`);
    addLog('info', `Device ID: ${cdm.getDeviceId()}`);
    updateStep('identify', 'success', `Widevine ${targetLevel} detected`);

    // Step 2: Locate CDM Binary
    updateStep('locate', 'running');
    await delay(1200);
    if (targetLevel === 'L1') {
      addLog('error', 'CDM binary protected by hardware TEE - cannot locate in memory');
      updateStep('locate', 'blocked', 'Hardware TEE protection active');
      addLog('warning', 'Attack blocked: L1 hardware protection prevents memory access');
      setIsRunning(false);
      return;
    }
    addLog('attack', 'Located libwidevinecdm.so in process memory');
    addLog('info', 'Base address: 0x7f4a8c000000');
    updateStep('locate', 'success', 'CDM library located at 0x7f4a8c000000');

    // Step 3: Attach Debugger
    updateStep('attach', 'running');
    await delay(800);
    if (targetLevel === 'L2') {
      addLog('warning', 'L2 protection: Keys stored in hardware, but decryption in software');
      addLog('info', 'Can intercept decrypted content, but not extract raw keys');
    }
    addLog('attack', 'Debugger attached to CDM process');
    addLog('info', 'Set breakpoint at Cdm_Decrypt function');
    updateStep('attach', 'success', 'Debugger attached, breakpoints set');

    // Step 4: Intercept License
    updateStep('intercept', 'running');
    await delay(1500);

    // Perform actual license acquisition
    const session = cdm.createSession([content.keyId]);
    const challenge = cdm.generateLicenseChallenge(session.sessionId);
    addLog('attack', 'Intercepted license challenge');

    const response = server.processLicenseRequest(challenge, content.contentId);
    if ('error' in response) {
      addLog('error', `License request failed: ${response.error}`);
      updateStep('intercept', 'failed', response.error);
      setIsRunning(false);
      return;
    }

    cdm.processLicenseResponse(response);
    addLog('attack', 'Intercepted license response with encrypted keys');
    addLog('info', `Session ID: ${session.sessionId}`);
    updateStep('intercept', 'success', 'License response captured');

    // Step 5: Extract Keys
    updateStep('extract', 'running');
    await delay(1000);

    const keys = cdm.simulateMemoryDump();
    if (!keys) {
      addLog('error', 'Memory dump blocked by hardware protection');
      updateStep('extract', 'blocked', 'Hardware protection active');
      if (targetLevel === 'L2') {
        addLog('warning', 'L2: Keys protected in hardware security module');
        addLog('info', 'Alternative: Intercept decrypted frames instead of keys');
      }
      setIsRunning(false);
      return;
    }

    addLog('attack', `VULNERABILITY EXPLOITED: ${keys.size} key(s) extracted from memory!`);
    keys.forEach((key, keyId) => {
      addLog('success', `Key ID: ${keyId}`);
      addLog('success', `Key: ${key}`);
    });
    setExtractedKeys(keys);
    updateStep('extract', 'success', `${keys.size} key(s) extracted`);

    // Step 6: Verify Keys
    updateStep('verify', 'running');
    await delay(800);
    addLog('attack', 'Testing extracted keys against encrypted content...');
    addLog('success', 'Keys verified - content can be decrypted!');
    updateStep('verify', 'success', 'Keys working');

    addLog('success', 'Attack completed successfully');
    addLog('warning', 'This demonstrates why L3 devices are vulnerable to key extraction');
    setIsRunning(false);
  };

  const getStepIcon = (status: AttackStep['status']) => {
    switch (status) {
      case 'pending': return <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />;
      case 'running': return <div className="w-4 h-4 rounded-full border-2 border-primary animate-pulse bg-primary/20" />;
      case 'success': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'blocked': return <Shield className="w-4 h-4 text-blue-500" />;
    }
  };

  const getLogIcon = (type: AttackLog['type']) => {
    switch (type) {
      case 'info': return <Terminal className="w-3 h-3 text-muted-foreground" />;
      case 'warning': return <AlertTriangle className="w-3 h-3 text-yellow-500" />;
      case 'success': return <CheckCircle2 className="w-3 h-3 text-green-500" />;
      case 'error': return <XCircle className="w-3 h-3 text-red-500" />;
      case 'attack': return <Bug className="w-3 h-3 text-red-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Cpu className="w-6 h-6 text-red-500" />
            CDM Extraction Attack
          </h1>
          <p className="text-muted-foreground mt-1">
            Simulate Content Decryption Module key extraction attack
          </p>
        </div>
        <Badge variant={perspective === 'red-team' ? 'destructive' : 'default'}>
          {perspective === 'red-team' ? 'Attack Mode' : 'Defense Analysis'}
        </Badge>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Educational Simulation Only</AlertTitle>
        <AlertDescription>
          This simulates a CDM memory dump attack for educational purposes.
          Actual attacks against production DRM systems are illegal.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="attack" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attack" className="gap-2">
            <Sword className="w-4 h-4" />
            Attack Simulation
          </TabsTrigger>
          <TabsTrigger value="defense" className="gap-2">
            <Shield className="w-4 h-4" />
            Defense Analysis
          </TabsTrigger>
          <TabsTrigger value="technical" className="gap-2">
            <Terminal className="w-4 h-4" />
            Technical Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="attack" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Attack Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Target Configuration</CardTitle>
                <CardDescription>Select target device security level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Security Level</label>
                  <div className="flex gap-2">
                    {(['L1', 'L2', 'L3'] as SecurityLevel[]).map((level) => (
                      <Button
                        key={level}
                        variant={targetLevel === level ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTargetLevel(level)}
                        disabled={isRunning}
                        className="flex-1"
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-3 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    {targetLevel === 'L1' && <Lock className="w-4 h-4 text-green-500" />}
                    {targetLevel === 'L2' && <Key className="w-4 h-4 text-yellow-500" />}
                    {targetLevel === 'L3' && <Unlock className="w-4 h-4 text-red-500" />}
                    <span className="font-medium">{targetLevel} Protection</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {targetLevel === 'L1' && 'Hardware TEE protection - keys never exposed'}
                    {targetLevel === 'L2' && 'Keys in hardware, decryption in software'}
                    {targetLevel === 'L3' && 'Full software - vulnerable to memory attacks'}
                  </p>
                </div>

                <Button
                  onClick={runAttack}
                  disabled={isRunning}
                  className="w-full gap-2"
                  variant="destructive"
                >
                  <Play className="w-4 h-4" />
                  {isRunning ? 'Attack Running...' : 'Launch Attack'}
                </Button>
              </CardContent>
            </Card>

            {/* Attack Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attack Progress</CardTitle>
                <CardDescription>Step-by-step extraction process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attackSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-3">
                      <div className="mt-0.5">{getStepIcon(step.status)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{index + 1}.</span>
                          <span className="font-medium text-sm">{step.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                        {step.details && (
                          <p className="text-xs mt-1 text-primary">{step.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Extracted Keys</CardTitle>
                <CardDescription>Keys recovered from memory</CardDescription>
              </CardHeader>
              <CardContent>
                {extractedKeys ? (
                  <div className="space-y-3">
                    {Array.from(extractedKeys.entries()).map(([keyId, key]) => (
                      <div key={keyId} className="rounded-lg border border-red-500/50 bg-red-500/10 p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Key className="w-4 h-4 text-red-500" />
                          <span className="text-sm font-medium text-red-400">Key Extracted</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs">
                            <span className="text-muted-foreground">Key ID: </span>
                            <code className="text-xs bg-background px-1 rounded">{keyId}</code>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">Key: </span>
                            <code className="text-xs bg-background px-1 rounded break-all">{key}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Alert variant="destructive" className="mt-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        In a real attack, these keys could decrypt all protected content.
                      </AlertDescription>
                    </Alert>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <HardDrive className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No keys extracted yet</p>
                    <p className="text-xs">Run the attack to attempt extraction</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Attack Log */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Attack Log</CardTitle>
              <CardDescription>Real-time attack output</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] rounded-lg border bg-zinc-950 p-3">
                {logs.length === 0 ? (
                  <div className="text-center text-muted-foreground text-sm py-8">
                    Launch attack to see output...
                  </div>
                ) : (
                  <div className="space-y-1 font-mono text-xs">
                    {logs.map((log, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-muted-foreground">
                          {new Date(log.timestamp).toLocaleTimeString()}
                        </span>
                        {getLogIcon(log.type)}
                        <span className={
                          log.type === 'error' ? 'text-red-400' :
                          log.type === 'warning' ? 'text-yellow-400' :
                          log.type === 'success' ? 'text-green-400' :
                          log.type === 'attack' ? 'text-red-400' :
                          'text-muted-foreground'
                        }>
                          {log.message}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="defense" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  Prevention Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border bg-green-500/10 border-green-500/30">
                    <h4 className="font-medium text-green-400 mb-1">Use L1 Security Level</h4>
                    <p className="text-xs text-muted-foreground">
                      Hardware TEE protection prevents any software-based key extraction.
                      Keys never exist in accessible memory.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-blue-500/10 border-blue-500/30">
                    <h4 className="font-medium text-blue-400 mb-1">Anti-Debugging Measures</h4>
                    <p className="text-xs text-muted-foreground">
                      Implement ptrace detection, timing checks, and integrity verification
                      to detect and prevent debugger attachment.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-purple-500/10 border-purple-500/30">
                    <h4 className="font-medium text-purple-400 mb-1">Code Obfuscation</h4>
                    <p className="text-xs text-muted-foreground">
                      Obfuscate CDM code paths and key handling routines to make
                      reverse engineering more difficult.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Detection Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-medium mb-1">Device Attestation</h4>
                    <p className="text-xs text-muted-foreground">
                      Verify device integrity before issuing licenses. Detect rooted/jailbroken
                      devices that may have compromised CDMs.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-medium mb-1">Anomaly Detection</h4>
                    <p className="text-xs text-muted-foreground">
                      Monitor for unusual patterns: same device ID requesting many different
                      content licenses, impossible playback speeds, etc.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-medium mb-1">Forensic Watermarking</h4>
                    <p className="text-xs text-muted-foreground">
                      Embed unique identifiers in content that survive re-encoding,
                      enabling leak source identification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technical Background</CardTitle>
              <CardDescription>How CDM extraction attacks work</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Attack Vector</h4>
                  <p className="text-muted-foreground">
                    CDM extraction attacks target the Content Decryption Module, which is responsible
                    for receiving encrypted keys from a license server and using them to decrypt
                    protected content. In L3 (software-only) implementations, these keys exist
                    unprotected in process memory during playback.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Tools Used (in real attacks)</h4>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                    <li>Frida - Dynamic instrumentation toolkit</li>
                    <li>IDA Pro / Ghidra - Disassemblers for CDM binary analysis</li>
                    <li>WideVine L3 Decryptor scripts</li>
                    <li>Custom key extraction scripts</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Why L1 is Secure</h4>
                  <p className="text-muted-foreground">
                    L1 devices use a hardware Trusted Execution Environment (TEE) like ARM TrustZone
                    or Intel SGX. The keys are decrypted inside the TEE and never exposed to the
                    main processor or operating system. Even with root access, the keys cannot be
                    extracted through software means.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Impact of Compromise</h4>
                  <p className="text-muted-foreground">
                    When an L3 CDM is compromised, attackers can extract keys for any content
                    licensed to that device. These keys can then be shared or used to create
                    pirated copies of protected content. This is why premium 4K content is
                    typically restricted to L1 devices only.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
