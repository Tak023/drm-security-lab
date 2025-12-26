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
  Key,
  Users,
  Share2,
  Lock,
  Server,
  Globe,
  CheckCircle2,
  XCircle,
  Copy,
  Download,
  Upload,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { MockCDM } from '@/lib/drm/mock-cdm';
import { MockLicenseServer } from '@/lib/drm/mock-license-server';
import { bytesToHex, generateKey } from '@/lib/drm/crypto';

interface SharedKey {
  keyId: string;
  key: string;
  contentId: string;
  sharedBy: string;
  timestamp: number;
  downloads: number;
}

interface SimulatedUser {
  id: string;
  name: string;
  type: 'legitimate' | 'pirate';
  hasLicense: boolean;
  usingSharedKey: boolean;
}

export function KeySharingLab() {
  const { perspective } = usePerspective();
  const [sharedKeys, setSharedKeys] = useState<SharedKey[]>([]);
  const [users, setUsers] = useState<SimulatedUser[]>([
    { id: '1', name: 'Alice', type: 'legitimate', hasLicense: true, usingSharedKey: false },
    { id: '2', name: 'Bob', type: 'pirate', hasLicense: false, usingSharedKey: false },
    { id: '3', name: 'Charlie', type: 'pirate', hasLicense: false, usingSharedKey: false },
    { id: '4', name: 'Diana', type: 'legitimate', hasLicense: true, usingSharedKey: false },
  ]);
  const [logs, setLogs] = useState<string[]>([]);
  const [activeScenario, setActiveScenario] = useState<'none' | 'sharing' | 'detection'>('none');
  const [detectionEnabled, setDetectionEnabled] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState<Set<string>>(new Set());

  const addLog = useCallback((message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }, []);

  const simulateKeyExtraction = () => {
    setActiveScenario('sharing');
    addLog('Alice (legitimate user) extracts key from her L3 device...');

    // Simulate key extraction
    const keyId = bytesToHex(generateKey(8));
    const key = bytesToHex(generateKey(16));

    setTimeout(() => {
      const newKey: SharedKey = {
        keyId,
        key,
        contentId: 'premium-movie-2024',
        sharedBy: 'Alice',
        timestamp: Date.now(),
        downloads: 0,
      };
      setSharedKeys(prev => [...prev, newKey]);
      addLog(`Key extracted: ${keyId.substring(0, 8)}...`);
      addLog('Alice shares key on underground forum...');
    }, 1000);
  };

  const simulateKeyDownload = (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (!user || user.hasLicense) return;

    if (blockedUsers.has(userId)) {
      addLog(`${user.name} is blocked from the service!`);
      return;
    }

    addLog(`${user.name} downloads shared key...`);

    setUsers(prev => prev.map(u =>
      u.id === userId ? { ...u, usingSharedKey: true } : u
    ));

    setSharedKeys(prev => prev.map(k => ({
      ...k,
      downloads: k.downloads + 1,
    })));

    if (detectionEnabled) {
      setTimeout(() => {
        addLog(`ANOMALY DETECTED: ${user.name} using key without valid license!`);
        addLog(`Blocking user ${user.name}...`);
        setBlockedUsers(prev => new Set([...prev, userId]));
        setUsers(prev => prev.map(u =>
          u.id === userId ? { ...u, usingSharedKey: false } : u
        ));
      }, 1500);
    } else {
      addLog(`${user.name} is now watching content for free!`);
    }
  };

  const runDetectionScenario = () => {
    setActiveScenario('detection');
    setDetectionEnabled(true);
    addLog('Enabling anomaly detection system...');
    addLog('Monitoring: License-to-playback correlation');
    addLog('Monitoring: Geographic impossibility checks');
    addLog('Monitoring: Device fingerprint analysis');

    // Check existing users
    users.forEach(user => {
      if (user.usingSharedKey) {
        setTimeout(() => {
          addLog(`DETECTED: ${user.name} - No license but decrypting content`);
          addLog(`ACTION: Revoking access for ${user.name}`);
          setBlockedUsers(prev => new Set([...prev, user.id]));
          setUsers(prev => prev.map(u =>
            u.id === user.id ? { ...u, usingSharedKey: false } : u
          ));
        }, 1000);
      }
    });
  };

  const resetScenario = () => {
    setSharedKeys([]);
    setUsers([
      { id: '1', name: 'Alice', type: 'legitimate', hasLicense: true, usingSharedKey: false },
      { id: '2', name: 'Bob', type: 'pirate', hasLicense: false, usingSharedKey: false },
      { id: '3', name: 'Charlie', type: 'pirate', hasLicense: false, usingSharedKey: false },
      { id: '4', name: 'Diana', type: 'legitimate', hasLicense: true, usingSharedKey: false },
    ]);
    setLogs([]);
    setActiveScenario('none');
    setDetectionEnabled(false);
    setBlockedUsers(new Set());
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Share2 className="w-6 h-6 text-red-500" />
            Key Sharing Attack
          </h1>
          <p className="text-muted-foreground mt-1">
            Simulate content key sharing and redistribution attacks
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
          This simulates key sharing for educational purposes.
          Sharing copyrighted content keys is illegal.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="simulation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulation" className="gap-2">
            <Users className="w-4 h-4" />
            Simulation
          </TabsTrigger>
          <TabsTrigger value="defense" className="gap-2">
            <Shield className="w-4 h-4" />
            Defense
          </TabsTrigger>
          <TabsTrigger value="technical" className="gap-2">
            <Key className="w-4 h-4" />
            Technical
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-4">
          {/* Control Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Scenario Controls</CardTitle>
              <CardDescription>Run key sharing attack simulation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <Button
                  onClick={simulateKeyExtraction}
                  variant="destructive"
                  disabled={sharedKeys.length > 0}
                  className="gap-2"
                >
                  <Sword className="w-4 h-4" />
                  Extract & Share Key
                </Button>
                <Button
                  onClick={runDetectionScenario}
                  variant="default"
                  disabled={detectionEnabled}
                  className="gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Enable Detection
                </Button>
                <Button
                  onClick={resetScenario}
                  variant="outline"
                  className="gap-2"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Shared Keys */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-red-500" />
                  Underground Forum
                </CardTitle>
                <CardDescription>Shared decryption keys</CardDescription>
              </CardHeader>
              <CardContent>
                {sharedKeys.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Key className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No keys shared yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {sharedKeys.map((sk, i) => (
                      <div key={i} className="rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-red-400">
                            {sk.contentId}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {sk.downloads} downloads
                          </Badge>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Key ID:</span>
                            <code className="bg-background px-1 rounded">{sk.keyId.substring(0, 16)}...</code>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Key:</span>
                            <code className="bg-background px-1 rounded">{sk.key.substring(0, 16)}...</code>
                            <Button variant="ghost" size="icon" className="h-5 w-5">
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="text-muted-foreground">
                            Shared by: {sk.sharedBy}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Users */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Users
                </CardTitle>
                <CardDescription>Simulated user behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className={`rounded-lg border p-3 ${
                        blockedUsers.has(user.id) ? 'border-red-500 bg-red-500/10' :
                        user.usingSharedKey ? 'border-yellow-500 bg-yellow-500/10' :
                        user.hasLicense ? 'border-green-500/30 bg-green-500/5' :
                        'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{user.name}</span>
                        <div className="flex gap-1">
                          {user.hasLicense && (
                            <Badge variant="outline" className="text-xs text-green-500 border-green-500">
                              Licensed
                            </Badge>
                          )}
                          {user.usingSharedKey && (
                            <Badge variant="outline" className="text-xs text-yellow-500 border-yellow-500">
                              Pirating
                            </Badge>
                          )}
                          {blockedUsers.has(user.id) && (
                            <Badge variant="destructive" className="text-xs">
                              Blocked
                            </Badge>
                          )}
                        </div>
                      </div>
                      {!user.hasLicense && sharedKeys.length > 0 && !blockedUsers.has(user.id) && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => simulateKeyDownload(user.id)}
                          disabled={user.usingSharedKey}
                          className="w-full gap-2 mt-2"
                        >
                          <Download className="w-3 h-3" />
                          {user.usingSharedKey ? 'Already Using Key' : 'Download Shared Key'}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Log</CardTitle>
                <CardDescription>Real-time activity</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-lg border bg-zinc-950 p-3">
                  {logs.length === 0 ? (
                    <div className="text-center text-muted-foreground text-sm py-8">
                      Start simulation to see events...
                    </div>
                  ) : (
                    <div className="space-y-1 font-mono text-xs">
                      {logs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            log.includes('DETECTED') || log.includes('ANOMALY') ? 'text-red-400' :
                            log.includes('ACTION') || log.includes('Blocking') ? 'text-yellow-400' :
                            log.includes('Enabling') ? 'text-blue-400' :
                            log.includes('free') || log.includes('shares') ? 'text-orange-400' :
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
                  Prevention Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border bg-green-500/10 border-green-500/30">
                    <h4 className="font-medium text-green-400 mb-1">Device Binding</h4>
                    <p className="text-xs text-muted-foreground">
                      Bind licenses to specific device fingerprints. Keys won&apos;t work
                      on different devices even if extracted.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-blue-500/10 border-blue-500/30">
                    <h4 className="font-medium text-blue-400 mb-1">Session-Based Keys</h4>
                    <p className="text-xs text-muted-foreground">
                      Generate unique keys per session with short validity periods.
                      Shared keys expire quickly.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-purple-500/10 border-purple-500/30">
                    <h4 className="font-medium text-purple-400 mb-1">Forensic Watermarking</h4>
                    <p className="text-xs text-muted-foreground">
                      Embed unique identifiers per user/session in the content.
                      Trace leaked content back to source.
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
                    <h4 className="font-medium mb-1">License Correlation</h4>
                    <p className="text-xs text-muted-foreground">
                      Monitor for playback without corresponding license acquisition.
                      Detect decryption using keys from other devices.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-medium mb-1">Geographic Analysis</h4>
                    <p className="text-xs text-muted-foreground">
                      Detect impossible scenarios like the same key being used
                      in different countries simultaneously.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-medium mb-1">Key Usage Monitoring</h4>
                    <p className="text-xs text-muted-foreground">
                      Track how many unique devices use each key. Unusual spikes
                      indicate key sharing.
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
              <CardTitle>Key Sharing Ecosystem</CardTitle>
              <CardDescription>How key sharing networks operate</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">The Key Sharing Process</h4>
                  <ol className="list-decimal pl-4 text-muted-foreground space-y-2">
                    <li><strong>Key Extraction:</strong> A user with a legitimate license extracts the decryption key from their L3 device using memory dump techniques</li>
                    <li><strong>Distribution:</strong> The extracted key (and Key ID) are shared on underground forums, private groups, or automated key servers</li>
                    <li><strong>Consumption:</strong> Pirates download the shared key and use it in modified players to decrypt content without paying</li>
                    <li><strong>Scaling:</strong> Automated systems can request licenses, extract keys, and share them in near real-time</li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Key Server Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Sophisticated piracy operations run &quot;key servers&quot; that automatically:
                  </p>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-1 mt-2">
                    <li>Request licenses from content providers using legitimate accounts</li>
                    <li>Extract keys using automated CDM exploitation tools</li>
                    <li>Store and index keys by content ID for quick lookup</li>
                    <li>Serve keys to pirate player applications on demand</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Impact and Scale</h4>
                  <p className="text-muted-foreground">
                    Key sharing is one of the most damaging forms of DRM circumvention because:
                  </p>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-1 mt-2">
                    <li>A single extracted key can enable unlimited piracy</li>
                    <li>Keys can be shared instantly worldwide</li>
                    <li>Content remains in original quality (no re-encoding losses)</li>
                    <li>Harder to trace than screen recording</li>
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
