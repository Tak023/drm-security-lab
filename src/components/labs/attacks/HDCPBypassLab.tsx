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
  Monitor,
  Tv,
  Cable,
  Lock,
  Unlock,
  Eye,
  Video,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';

interface HDCPDevice {
  id: string;
  name: string;
  type: 'source' | 'sink' | 'splitter';
  hdcpVersion: '1.4' | '2.2' | '2.3' | 'none';
  authenticated: boolean;
  compliant: boolean;
}

interface SignalPath {
  from: string;
  to: string;
  encrypted: boolean;
  quality: '4K HDR' | '1080p' | '720p' | 'blocked';
}

export function HDCPBypassLab() {
  const { perspective } = usePerspective();
  const [devices, setDevices] = useState<HDCPDevice[]>([
    { id: 'source', name: 'Streaming Device', type: 'source', hdcpVersion: '2.3', authenticated: false, compliant: true },
    { id: 'display', name: 'TV/Monitor', type: 'sink', hdcpVersion: '2.2', authenticated: false, compliant: true },
  ]);
  const [signalPath, setSignalPath] = useState<SignalPath | null>(null);
  const [attackDevice, setAttackDevice] = useState<HDCPDevice | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const addLog = useCallback((message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }, []);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const simulateNormalPlayback = async () => {
    setIsSimulating(true);
    setLogs([]);
    setAttackDevice(null);
    setSignalPath(null);
    setDevices(prev => prev.map(d => ({ ...d, authenticated: false })));

    addLog('Starting HDCP authentication...');
    await delay(500);

    // HDCP handshake simulation
    addLog('Source device initiates HDCP handshake');
    await delay(400);
    addLog('Sending AKE_Init to display...');
    await delay(300);

    setDevices(prev => prev.map(d =>
      d.id === 'source' ? { ...d, authenticated: true } : d
    ));

    addLog('Display responds with receiver certificate');
    await delay(400);
    addLog('Verifying display is HDCP 2.2 compliant...');
    await delay(500);

    setDevices(prev => prev.map(d =>
      d.id === 'display' ? { ...d, authenticated: true } : d
    ));

    addLog('HDCP authentication successful!');
    addLog('Establishing encrypted link...');
    await delay(300);

    setSignalPath({
      from: 'Streaming Device',
      to: 'TV/Monitor',
      encrypted: true,
      quality: '4K HDR',
    });

    addLog('4K HDR content streaming with HDCP 2.2 protection');
    setIsSimulating(false);
  };

  const simulateSplitterAttack = async () => {
    setIsSimulating(true);
    setLogs([]);
    setSignalPath(null);
    setDevices(prev => prev.map(d => ({ ...d, authenticated: false })));

    const splitter: HDCPDevice = {
      id: 'splitter',
      name: 'HDCP Stripper',
      type: 'splitter',
      hdcpVersion: 'none',
      authenticated: false,
      compliant: false,
    };
    setAttackDevice(splitter);

    addLog('Inserting HDCP stripper between source and display...');
    await delay(800);

    addLog('Source device initiates HDCP handshake');
    await delay(400);

    // Stripper intercepts
    addLog('⚠️ HDCP stripper intercepting handshake!');
    await delay(400);
    addLog('Stripper presents fake HDCP 2.2 certificate to source');
    await delay(500);

    setDevices(prev => prev.map(d =>
      d.id === 'source' ? { ...d, authenticated: true } : d
    ));

    addLog('Source believes it\'s talking to compliant display');
    await delay(400);
    addLog('Stripper decrypts HDCP stream...');
    await delay(500);
    addLog('Stripper outputs unprotected signal to display!');
    await delay(300);

    setSignalPath({
      from: 'HDCP Stripper',
      to: 'TV/Monitor (or Capture Card)',
      encrypted: false,
      quality: '4K HDR',
    });

    setDevices(prev => prev.map(d =>
      d.id === 'display' ? { ...d, authenticated: true } : d
    ));

    addLog('🚨 BYPASS SUCCESSFUL: Unprotected 4K signal available!');
    addLog('Content can now be captured/recorded without encryption');
    setIsSimulating(false);
  };

  const simulateDowngradeAttack = async () => {
    setIsSimulating(true);
    setLogs([]);
    setSignalPath(null);
    setAttackDevice(null);
    setDevices(prev => prev.map(d => ({ ...d, authenticated: false })));

    addLog('Simulating HDCP downgrade attack...');
    await delay(500);

    addLog('Source device initiates HDCP 2.2 handshake');
    await delay(400);

    // Simulate non-compliant display
    setDevices(prev => prev.map(d =>
      d.id === 'display' ? { ...d, hdcpVersion: '1.4' as const, compliant: false } : d
    ));

    addLog('Display reports HDCP 1.4 only (downgrade detected)');
    await delay(500);

    addLog('Source evaluating content protection requirements...');
    await delay(600);

    // Two possible outcomes based on content requirements
    const requiresHDCP22 = true; // Premium 4K content typically requires 2.2

    if (requiresHDCP22) {
      addLog('Content requires HDCP 2.2 - blocking 4K playback');
      await delay(400);
      setSignalPath({
        from: 'Streaming Device',
        to: 'TV/Monitor',
        encrypted: true,
        quality: '1080p', // Downgraded
      });
      addLog('Fallback to 1080p with HDCP 1.4 protection');
      addLog('Defense successful: Premium content protected');
    } else {
      addLog('Content allows HDCP 1.4 - accepting downgrade');
      setSignalPath({
        from: 'Streaming Device',
        to: 'TV/Monitor',
        encrypted: true,
        quality: '4K HDR',
      });
      addLog('⚠️ 4K content playing with weaker HDCP 1.4');
    }

    setDevices(prev => prev.map(d => ({ ...d, authenticated: true })));
    setIsSimulating(false);
  };

  const reset = () => {
    setDevices([
      { id: 'source', name: 'Streaming Device', type: 'source', hdcpVersion: '2.3', authenticated: false, compliant: true },
      { id: 'display', name: 'TV/Monitor', type: 'sink', hdcpVersion: '2.2', authenticated: false, compliant: true },
    ]);
    setSignalPath(null);
    setAttackDevice(null);
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Cable className="w-6 h-6 text-red-500" />
            HDCP Bypass Attack
          </h1>
          <p className="text-muted-foreground mt-1">
            Simulate HDMI content protection bypass scenarios
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
          This simulates HDCP bypass for educational purposes.
          Circumventing copy protection is illegal under the DMCA.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="simulation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulation" className="gap-2">
            <Tv className="w-4 h-4" />
            Simulation
          </TabsTrigger>
          <TabsTrigger value="defense" className="gap-2">
            <Shield className="w-4 h-4" />
            Defense
          </TabsTrigger>
          <TabsTrigger value="technical" className="gap-2">
            <Cable className="w-4 h-4" />
            Technical
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-4">
          {/* Signal Path Visualization */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">HDMI Signal Path</CardTitle>
              <CardDescription>Visual representation of the video signal chain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 py-6">
                {/* Source Device */}
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-lg border-2 flex flex-col items-center justify-center ${
                    devices.find(d => d.id === 'source')?.authenticated
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-border bg-muted'
                  }`}>
                    <Monitor className="w-8 h-8" />
                    {devices.find(d => d.id === 'source')?.authenticated && (
                      <Lock className="w-4 h-4 text-green-500 mt-1" />
                    )}
                  </div>
                  <span className="text-sm mt-2 block">Source</span>
                  <Badge variant="outline" className="text-xs mt-1">
                    HDCP {devices.find(d => d.id === 'source')?.hdcpVersion}
                  </Badge>
                </div>

                {/* Cable/Connection */}
                <div className="flex items-center gap-1">
                  <div className={`h-1 w-8 rounded ${signalPath?.encrypted ? 'bg-green-500' : signalPath ? 'bg-red-500' : 'bg-muted-foreground'}`} />
                  <Zap className={`w-4 h-4 ${signalPath?.encrypted ? 'text-green-500' : signalPath ? 'text-red-500' : 'text-muted-foreground'}`} />
                  <div className={`h-1 w-8 rounded ${signalPath?.encrypted ? 'bg-green-500' : signalPath ? 'bg-red-500' : 'bg-muted-foreground'}`} />
                </div>

                {/* Attack Device (if present) */}
                {attackDevice && (
                  <>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-lg border-2 border-red-500 bg-red-500/20 flex flex-col items-center justify-center">
                        <Eye className="w-8 h-8 text-red-500" />
                        <Unlock className="w-4 h-4 text-red-500 mt-1" />
                      </div>
                      <span className="text-sm mt-2 block text-red-500">{attackDevice.name}</span>
                      <Badge variant="destructive" className="text-xs mt-1">
                        No HDCP
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="h-1 w-8 rounded bg-red-500" />
                      <ArrowRight className="w-4 h-4 text-red-500" />
                      <div className="h-1 w-8 rounded bg-red-500" />
                    </div>
                  </>
                )}

                {/* Display */}
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-lg border-2 flex flex-col items-center justify-center ${
                    devices.find(d => d.id === 'display')?.authenticated
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-border bg-muted'
                  }`}>
                    <Tv className="w-8 h-8" />
                    {devices.find(d => d.id === 'display')?.authenticated && (
                      <Lock className="w-4 h-4 text-green-500 mt-1" />
                    )}
                  </div>
                  <span className="text-sm mt-2 block">Display</span>
                  <Badge variant="outline" className="text-xs mt-1">
                    HDCP {devices.find(d => d.id === 'display')?.hdcpVersion}
                  </Badge>
                </div>
              </div>

              {/* Signal Status */}
              {signalPath && (
                <div className={`mt-4 p-3 rounded-lg border text-center ${
                  signalPath.encrypted ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'
                }`}>
                  <div className="flex items-center justify-center gap-2">
                    {signalPath.encrypted ? (
                      <Lock className="w-4 h-4 text-green-500" />
                    ) : (
                      <Unlock className="w-4 h-4 text-red-500" />
                    )}
                    <span className={signalPath.encrypted ? 'text-green-400' : 'text-red-400'}>
                      {signalPath.encrypted ? 'HDCP Protected' : 'UNPROTECTED SIGNAL'}
                    </span>
                  </div>
                  <Badge className="mt-2" variant={signalPath.quality === '4K HDR' ? 'default' : 'secondary'}>
                    {signalPath.quality}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Scenario Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attack Scenarios</CardTitle>
                <CardDescription>Select a scenario to simulate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={simulateNormalPlayback}
                  disabled={isSimulating}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Normal HDCP Playback
                </Button>
                <Button
                  onClick={simulateSplitterAttack}
                  disabled={isSimulating}
                  variant="destructive"
                  className="w-full justify-start gap-2"
                >
                  <Sword className="w-4 h-4" />
                  HDCP Stripper Attack
                </Button>
                <Button
                  onClick={simulateDowngradeAttack}
                  disabled={isSimulating}
                  variant="outline"
                  className="w-full justify-start gap-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Version Downgrade Attack
                </Button>
                <Separator />
                <Button
                  onClick={reset}
                  variant="ghost"
                  className="w-full"
                  disabled={isSimulating}
                >
                  Reset Simulation
                </Button>
              </CardContent>
            </Card>

            {/* Event Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">HDCP Handshake Log</CardTitle>
                <CardDescription>Authentication protocol events</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[250px] rounded-lg border bg-zinc-950 p-3">
                  {logs.length === 0 ? (
                    <div className="text-center text-muted-foreground text-sm py-8">
                      Select a scenario to begin...
                    </div>
                  ) : (
                    <div className="space-y-1 font-mono text-xs">
                      {logs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            log.includes('🚨') || log.includes('BYPASS') ? 'text-red-400 font-bold' :
                            log.includes('⚠️') ? 'text-yellow-400' :
                            log.includes('successful') || log.includes('Defense') ? 'text-green-400' :
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
          </div>
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
                  <h4 className="font-medium text-green-400 mb-1">HDCP 2.3 Requirement</h4>
                  <p className="text-xs text-muted-foreground">
                    Require HDCP 2.3 for premium content. This version has improved
                    security against known bypass methods.
                  </p>
                </div>
                <div className="p-3 rounded-lg border bg-blue-500/10 border-blue-500/30">
                  <h4 className="font-medium text-blue-400 mb-1">Device Authentication</h4>
                  <p className="text-xs text-muted-foreground">
                    Verify receiver certificates against revocation lists.
                    Block known compromised device keys.
                  </p>
                </div>
                <div className="p-3 rounded-lg border bg-purple-500/10 border-purple-500/30">
                  <h4 className="font-medium text-purple-400 mb-1">Repeater Limits</h4>
                  <p className="text-xs text-muted-foreground">
                    Limit the number of downstream devices. Prevent unauthorized
                    splitters from being inserted in the chain.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Locality Check</h4>
                  <p className="text-xs text-muted-foreground">
                    HDCP 2.2+ includes locality checks to detect if devices are
                    physically close, making remote bypass harder.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Content Type Enforcement</h4>
                  <p className="text-xs text-muted-foreground">
                    Enforce content type flags that specify minimum HDCP version.
                    Block playback if requirements aren&apos;t met.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-1">Forensic Watermarking</h4>
                  <p className="text-xs text-muted-foreground">
                    Even if captured, watermarks identify the source of leaks.
                    Deters professional piracy operations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>HDCP Technical Overview</CardTitle>
              <CardDescription>High-bandwidth Digital Content Protection</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">HDCP Versions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border">
                      <h5 className="font-medium text-yellow-400">HDCP 1.x</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Original version. Master key leaked in 2010.
                        Considered broken but still used for SD/HD content.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg border">
                      <h5 className="font-medium text-blue-400">HDCP 2.2</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Required for 4K content. Uses RSA-3072 and AES-128.
                        More resistant to key extraction.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg border">
                      <h5 className="font-medium text-green-400">HDCP 2.3</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Latest version for 8K and HDR.
                        Improved authentication and locality checks.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">How HDCP Strippers Work</h4>
                  <ol className="list-decimal pl-4 text-muted-foreground space-y-2">
                    <li>Device presents itself as a legitimate HDCP-compliant display to the source</li>
                    <li>Receives the encrypted HDCP stream from the source device</li>
                    <li>Decrypts the stream using compromised/leaked keys</li>
                    <li>Outputs unencrypted HDMI signal to any connected device</li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Legal Considerations</h4>
                  <p className="text-muted-foreground">
                    HDCP bypass devices are illegal to sell or use in many jurisdictions under laws like
                    the DMCA (US), EUCD (Europe), and similar copyright protection laws. Manufacturing,
                    distributing, or using such devices can result in civil and criminal penalties.
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
