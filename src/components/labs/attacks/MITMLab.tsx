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
  Network,
  Server,
  Monitor,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { bytesToHex, generateKey } from '@/lib/drm/crypto';

interface NetworkPacket {
  id: string;
  direction: 'request' | 'response';
  from: string;
  to: string;
  type: 'license_request' | 'license_response' | 'content' | 'manifest';
  encrypted: boolean;
  intercepted: boolean;
  modified: boolean;
  data: string;
  timestamp: number;
}

interface AttackState {
  proxyActive: boolean;
  tlsIntercepted: boolean;
  licenseModified: boolean;
  keysExtracted: boolean;
}

export function MITMLab() {
  const { perspective } = usePerspective();
  const [packets, setPackets] = useState<NetworkPacket[]>([]);
  const [attackState, setAttackState] = useState<AttackState>({
    proxyActive: false,
    tlsIntercepted: false,
    licenseModified: false,
    keysExtracted: false,
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [tlsEnabled, setTlsEnabled] = useState(true);
  const [certificatePinning, setCertificatePinning] = useState(false);

  const addLog = useCallback((message: string, type: 'info' | 'attack' | 'defense' | 'success' | 'error' = 'info') => {
    const prefix = {
      info: '[INFO]',
      attack: '[ATTACK]',
      defense: '[DEFENSE]',
      success: '[SUCCESS]',
      error: '[ERROR]',
    };
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()} ${prefix[type]} ${message}`]);
  }, []);

  const addPacket = useCallback((packet: Omit<NetworkPacket, 'id' | 'timestamp'>) => {
    setPackets(prev => [...prev, {
      ...packet,
      id: bytesToHex(generateKey(4)),
      timestamp: Date.now(),
    }]);
  }, []);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runMITMAttack = async () => {
    setIsRunning(true);
    setPackets([]);
    setLogs([]);
    setAttackState({
      proxyActive: false,
      tlsIntercepted: false,
      licenseModified: false,
      keysExtracted: false,
    });

    // Step 1: Set up proxy
    addLog('Setting up MITM proxy on local network...', 'attack');
    await delay(800);
    setAttackState(prev => ({ ...prev, proxyActive: true }));
    addLog('Proxy active - intercepting traffic', 'attack');

    // Step 2: Intercept TLS
    addLog('Attempting to intercept TLS connection...', 'attack');
    await delay(1000);

    if (certificatePinning) {
      addLog('Certificate pinning detected!', 'defense');
      addLog('Client rejected proxy certificate - attack blocked', 'error');
      setIsRunning(false);
      return;
    }

    if (tlsEnabled) {
      addLog('Installing custom CA certificate...', 'attack');
      await delay(500);
      addLog('TLS interception successful - can read encrypted traffic', 'attack');
      setAttackState(prev => ({ ...prev, tlsIntercepted: true }));
    } else {
      addLog('WARNING: Connection not using TLS!', 'attack');
      addLog('Traffic visible in plaintext', 'attack');
      setAttackState(prev => ({ ...prev, tlsIntercepted: true }));
    }

    // Simulate video player traffic
    addLog('Client requesting content manifest...', 'info');
    await delay(600);
    addPacket({
      direction: 'request',
      from: 'Client',
      to: 'CDN',
      type: 'manifest',
      encrypted: tlsEnabled,
      intercepted: true,
      modified: false,
      data: 'GET /manifest.mpd',
    });

    addPacket({
      direction: 'response',
      from: 'CDN',
      to: 'Client',
      type: 'manifest',
      encrypted: tlsEnabled,
      intercepted: true,
      modified: false,
      data: 'MPD manifest with PSSH data',
    });

    // License request
    addLog('Client sending license request...', 'info');
    await delay(800);
    addPacket({
      direction: 'request',
      from: 'Client',
      to: 'License Server',
      type: 'license_request',
      encrypted: tlsEnabled,
      intercepted: true,
      modified: false,
      data: 'Encrypted challenge with device certificate',
    });

    addLog('Intercepted license request - analyzing...', 'attack');
    await delay(500);

    // License response
    addLog('License server responding...', 'info');
    await delay(1000);
    addPacket({
      direction: 'response',
      from: 'License Server',
      to: 'Client',
      type: 'license_response',
      encrypted: tlsEnabled,
      intercepted: true,
      modified: false,
      data: 'Encrypted license with content keys',
    });

    addLog('Intercepted license response!', 'attack');
    addLog('Attempting to extract keys from response...', 'attack');
    await delay(1200);

    // Key extraction attempt
    if (tlsEnabled) {
      addLog('License response is encrypted with device-specific key', 'info');
      addLog('Cannot decrypt without device private key', 'error');
      addLog('Keys protected by CDM encryption layer', 'defense');
    } else {
      addLog('LICENSE RESPONSE IN PLAINTEXT!', 'attack');
      addLog('Extracting content keys...', 'attack');
      await delay(500);
      setAttackState(prev => ({ ...prev, keysExtracted: true }));
      addLog(`Key extracted: ${bytesToHex(generateKey(16))}`, 'success');
    }

    // Show content traffic
    addLog('Content segments being requested...', 'info');
    for (let i = 1; i <= 3; i++) {
      await delay(400);
      addPacket({
        direction: 'request',
        from: 'Client',
        to: 'CDN',
        type: 'content',
        encrypted: true,
        intercepted: true,
        modified: false,
        data: `GET /segment_${i}.m4s (encrypted)`,
      });
    }

    addLog('Attack simulation complete', 'info');
    setIsRunning(false);
  };

  const reset = () => {
    setPackets([]);
    setLogs([]);
    setAttackState({
      proxyActive: false,
      tlsIntercepted: false,
      licenseModified: false,
      keysExtracted: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Network className="w-6 h-6 text-red-500" />
            Man-in-the-Middle Attack
          </h1>
          <p className="text-muted-foreground mt-1">
            Simulate network interception attacks on DRM license exchange
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
          This simulates MITM attacks for educational purposes.
          Intercepting network traffic without authorization is illegal.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="simulation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulation" className="gap-2">
            <Network className="w-4 h-4" />
            Simulation
          </TabsTrigger>
          <TabsTrigger value="defense" className="gap-2">
            <Shield className="w-4 h-4" />
            Defense
          </TabsTrigger>
          <TabsTrigger value="technical" className="gap-2">
            <Server className="w-4 h-4" />
            Technical
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-4">
          {/* Network Diagram */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Network Topology</CardTitle>
              <CardDescription>Simulated DRM network with MITM proxy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center ${
                    attackState.proxyActive ? 'border-blue-500 bg-blue-500/20' : 'border-border bg-muted'
                  }`}>
                    <Monitor className="w-8 h-8" />
                  </div>
                  <span className="text-sm mt-2 block">Client</span>
                </div>

                <ArrowRight className={`w-6 h-6 ${attackState.tlsIntercepted ? 'text-red-500' : 'text-muted-foreground'}`} />

                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center ${
                    attackState.proxyActive ? 'border-red-500 bg-red-500/20' : 'border-border bg-muted'
                  }`}>
                    <Eye className={`w-8 h-8 ${attackState.proxyActive ? 'text-red-500' : ''}`} />
                  </div>
                  <span className="text-sm mt-2 block text-red-500">MITM Proxy</span>
                </div>

                <ArrowRight className={`w-6 h-6 ${attackState.tlsIntercepted ? 'text-red-500' : 'text-muted-foreground'}`} />

                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg border-2 border-purple-500 bg-purple-500/20 flex items-center justify-center">
                    <Server className="w-8 h-8" />
                  </div>
                  <span className="text-sm mt-2 block">License Server</span>
                </div>
              </div>

              {/* Attack State Indicators */}
              <div className="flex justify-center gap-4 mt-4">
                <Badge variant={attackState.proxyActive ? 'destructive' : 'outline'}>
                  Proxy: {attackState.proxyActive ? 'Active' : 'Inactive'}
                </Badge>
                <Badge variant={attackState.tlsIntercepted ? 'destructive' : 'outline'}>
                  TLS: {attackState.tlsIntercepted ? 'Intercepted' : 'Secure'}
                </Badge>
                <Badge variant={attackState.keysExtracted ? 'destructive' : 'outline'}>
                  Keys: {attackState.keysExtracted ? 'Extracted!' : 'Protected'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attack Configuration</CardTitle>
                <CardDescription>Configure target security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-2">
                    {tlsEnabled ? <Lock className="w-4 h-4 text-green-500" /> : <Unlock className="w-4 h-4 text-red-500" />}
                    <span className="font-medium">TLS Encryption</span>
                  </div>
                  <Button
                    variant={tlsEnabled ? 'default' : 'destructive'}
                    size="sm"
                    onClick={() => setTlsEnabled(!tlsEnabled)}
                    disabled={isRunning}
                  >
                    {tlsEnabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Shield className={`w-4 h-4 ${certificatePinning ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <span className="font-medium">Certificate Pinning</span>
                  </div>
                  <Button
                    variant={certificatePinning ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCertificatePinning(!certificatePinning)}
                    disabled={isRunning}
                  >
                    {certificatePinning ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button
                    onClick={runMITMAttack}
                    disabled={isRunning}
                    variant="destructive"
                    className="flex-1 gap-2"
                  >
                    <Sword className="w-4 h-4" />
                    {isRunning ? 'Running...' : 'Launch MITM Attack'}
                  </Button>
                  <Button
                    onClick={reset}
                    variant="outline"
                    disabled={isRunning}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Intercepted Packets */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Intercepted Traffic</CardTitle>
                <CardDescription>Network packets captured by proxy</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  {packets.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Network className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No packets captured</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {packets.map((packet) => (
                        <div
                          key={packet.id}
                          className={`p-2 rounded border text-xs ${
                            packet.type === 'license_response' && !tlsEnabled
                              ? 'border-red-500 bg-red-500/10'
                              : 'border-border'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {packet.direction === 'request' ? (
                              <ArrowRight className="w-3 h-3 text-blue-500" />
                            ) : (
                              <ArrowLeft className="w-3 h-3 text-green-500" />
                            )}
                            <span className="font-medium">{packet.from} → {packet.to}</span>
                            <Badge variant="outline" className="text-[10px]">
                              {packet.type.replace('_', ' ')}
                            </Badge>
                            {packet.encrypted && (
                              <Lock className="w-3 h-3 text-green-500" />
                            )}
                          </div>
                          <code className="text-muted-foreground">{packet.data}</code>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Attack Log */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Attack Log</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[150px] rounded-lg border bg-zinc-950 p-3">
                {logs.length === 0 ? (
                  <div className="text-center text-muted-foreground text-sm py-8">
                    Launch attack to see output...
                  </div>
                ) : (
                  <div className="space-y-1 font-mono text-xs">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.includes('[ATTACK]') ? 'text-red-400' :
                          log.includes('[DEFENSE]') ? 'text-blue-400' :
                          log.includes('[SUCCESS]') ? 'text-green-400' :
                          log.includes('[ERROR]') ? 'text-yellow-400' :
                          'text-muted-foreground'
                        }
                      >
                        {log}
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
                  Prevention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border bg-green-500/10 border-green-500/30">
                  <h4 className="font-medium text-green-400 mb-1">TLS Everywhere</h4>
                  <p className="text-xs text-muted-foreground">
                    All DRM communication must use TLS 1.3 with strong cipher suites.
                    Never transmit license data over unencrypted connections.
                  </p>
                </div>
                <div className="p-3 rounded-lg border bg-blue-500/10 border-blue-500/30">
                  <h4 className="font-medium text-blue-400 mb-1">Certificate Pinning</h4>
                  <p className="text-xs text-muted-foreground">
                    Pin the license server certificate in the client application.
                    Reject connections to servers with different certificates.
                  </p>
                </div>
                <div className="p-3 rounded-lg border bg-purple-500/10 border-purple-500/30">
                  <h4 className="font-medium text-purple-400 mb-1">End-to-End Encryption</h4>
                  <p className="text-xs text-muted-foreground">
                    Encrypt license data with device-specific keys before TLS.
                    Even if TLS is compromised, keys remain protected.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-yellow-500" />
                  Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Certificate Validation</h4>
                  <p className="text-xs text-muted-foreground">
                    Verify full certificate chain. Detect and reject self-signed
                    or unauthorized CA certificates.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Connection Monitoring</h4>
                  <p className="text-xs text-muted-foreground">
                    Monitor for unusual connection patterns, latency spikes,
                    or certificate changes that indicate interception.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Request Fingerprinting</h4>
                  <p className="text-xs text-muted-foreground">
                    Compare request characteristics against known client signatures
                    to detect modified or replayed requests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>MITM Attack Mechanics</CardTitle>
              <CardDescription>How network interception attacks work</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Attack Phases</h4>
                  <ol className="list-decimal pl-4 text-muted-foreground space-y-2">
                    <li><strong>Network Position:</strong> Attacker gains position between client and server (ARP spoofing, rogue AP, DNS hijacking)</li>
                    <li><strong>TLS Interception:</strong> Present fake certificate to client, establish separate TLS session with server</li>
                    <li><strong>Traffic Analysis:</strong> Decrypt, analyze, and potentially modify traffic in real-time</li>
                    <li><strong>Data Extraction:</strong> Extract sensitive data like session tokens, keys, or credentials</li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Why Certificate Pinning Works</h4>
                  <p className="text-muted-foreground">
                    Certificate pinning stores the expected certificate or public key hash in the application.
                    When connecting, the app compares the server&apos;s certificate against the pinned value.
                    If they don&apos;t match (as with a MITM proxy certificate), the connection is rejected.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">DRM-Specific Protections</h4>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                    <li>License responses encrypted with device public key</li>
                    <li>Challenge-response protocols prevent replay attacks</li>
                    <li>Nonces and timestamps detect stale requests</li>
                    <li>Device attestation verifies client integrity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
