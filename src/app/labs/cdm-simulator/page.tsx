'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Shield,
  Play,
  RotateCcw,
  Key,
  Server,
  Smartphone,
  Monitor,
  Cpu,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import { MockCDM, type SecurityLevel } from '@/lib/drm/mock-cdm';
import { MockLicenseServer } from '@/lib/drm/mock-license-server';
import { bytesToHex } from '@/lib/drm/crypto';

type CDMState = 'uninitialized' | 'initialized' | 'session-created' | 'licensed' | 'ready' | 'error';

interface CDMEvent {
  id: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
  source: 'cdm' | 'server' | 'system';
  message: string;
  details?: string;
}

const securityLevelInfo: Record<SecurityLevel, { icon: typeof Shield; description: string; color: string }> = {
  L1: {
    icon: Shield,
    description: 'Hardware TEE - Keys never exposed to software',
    color: 'text-green-500',
  },
  L2: {
    icon: Cpu,
    description: 'Hardware crypto, software CDM - Hybrid protection',
    color: 'text-yellow-500',
  },
  L3: {
    icon: Monitor,
    description: 'Software only - Vulnerable to extraction',
    color: 'text-red-500',
  },
};

export default function CDMSimulatorPage() {
  const [cdm, setCdm] = useState<MockCDM | null>(null);
  const [licenseServer] = useState(() => new MockLicenseServer());
  const [securityLevel, setSecurityLevel] = useState<SecurityLevel>('L1');
  const [cdmState, setCdmState] = useState<CDMState>('uninitialized');
  const [events, setEvents] = useState<CDMEvent[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const [contentKey, setContentKey] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const addEvent = (
    type: CDMEvent['type'],
    source: CDMEvent['source'],
    message: string,
    details?: string
  ) => {
    const event: CDMEvent = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      type,
      source,
      message,
      details,
    };
    setEvents(prev => [...prev, event]);
  };

  const resetSimulation = () => {
    setCdm(null);
    setCdmState('uninitialized');
    setEvents([]);
    setCurrentStep(0);
    setIsPlaying(false);
    setContentKey(null);
    setSessionId(null);
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runSimulation = async () => {
    setIsPlaying(true);
    resetSimulation();
    await delay(500);

    // Step 1: Initialize CDM
    setCurrentStep(1);
    addEvent('info', 'system', 'Initializing Content Decryption Module...', `Security Level: ${securityLevel}`);
    await delay(800);

    const newCdm = new MockCDM(securityLevel);
    setCdm(newCdm);
    setCdmState('initialized');
    addEvent('success', 'cdm', 'CDM initialized successfully', `Device ID: ${newCdm.getDeviceId()}`);
    await delay(600);

    // Register demo content on license server
    const contentId = 'demo-content-001';
    const content = licenseServer.registerContent(contentId, 'Demo Video', 'L3');

    // Step 2: Create Session
    setCurrentStep(2);
    addEvent('info', 'cdm', 'Creating license session...');
    await delay(500);

    const session = newCdm.createSession([content.keyId]);
    setSessionId(session.sessionId);
    setCdmState('session-created');
    addEvent('success', 'cdm', 'Session created', `Session ID: ${session.sessionId}`);
    await delay(600);

    // Step 3: Generate License Request
    setCurrentStep(3);
    addEvent('info', 'cdm', 'Generating license request...');
    await delay(500);

    const licenseChallenge = newCdm.generateLicenseChallenge(session.sessionId);
    addEvent('info', 'cdm', 'License challenge generated', `Key IDs: ${licenseChallenge.keyIds.join(', ')}`);
    await delay(600);

    // Step 4: Send to License Server
    setCurrentStep(4);
    addEvent('info', 'system', 'Sending license request to server...');
    await delay(800);

    addEvent('info', 'server', 'License request received', `Validating device certificate...`);
    await delay(500);

    // Check device certificate
    const deviceCert = licenseChallenge.deviceCertificate;
    addEvent('success', 'server', 'Device certificate validated', `Security Level: ${deviceCert.securityLevel}`);
    await delay(500);

    // Step 5: Process License Response
    setCurrentStep(5);
    const licenseResponse = licenseServer.processLicenseRequest(licenseChallenge, contentId);

    if ('error' in licenseResponse) {
      addEvent('error', 'server', 'License request denied', licenseResponse.error);
      setCdmState('error');
      setIsPlaying(false);
      return;
    }

    addEvent('success', 'server', 'License generated', `Keys: ${licenseResponse.keys.length}, Duration: ${licenseResponse.policy.licenseDuration}s`);
    await delay(600);

    addEvent('info', 'system', 'Sending license response to CDM...');
    await delay(500);

    // Step 6: Process License in CDM
    setCurrentStep(6);
    addEvent('info', 'cdm', 'Processing license response...');
    await delay(500);

    try {
      newCdm.processLicenseResponse(licenseResponse);
      setCdmState('licensed');
      addEvent('success', 'cdm', 'License processed successfully');

      // Simulate key extraction based on security level
      if (securityLevel === 'L3') {
        const extractedKeys = newCdm.simulateMemoryDump();
        if (extractedKeys && extractedKeys.size > 0) {
          const firstKey = extractedKeys.values().next().value;
          setContentKey(firstKey || null);
          addEvent('warning', 'cdm', 'Key extracted from memory',
            'L3 software CDM - keys accessible in memory'
          );
        }
      } else if (securityLevel === 'L2') {
        setContentKey('[PARTIAL PROTECTION]');
        addEvent('info', 'cdm', 'Keys in hardware crypto engine',
          'L2 hybrid - keys protected but decrypted content accessible'
        );
      } else {
        setContentKey('[PROTECTED IN TEE]');
        addEvent('success', 'cdm', 'Keys stored in hardware TEE',
          'L1 hardware - keys never leave secure enclave'
        );
      }
    } catch (error) {
      addEvent('error', 'cdm', 'Failed to process license', String(error));
      setCdmState('error');
      setIsPlaying(false);
      return;
    }
    await delay(600);

    // Step 7: Ready for Decryption
    setCurrentStep(7);
    setCdmState('ready');
    addEvent('success', 'system', 'CDM ready for content decryption',
      `Security Level ${securityLevel}: ${securityLevelInfo[securityLevel].description}`
    );

    setIsPlaying(false);
  };

  const getEventIcon = (type: CDMEvent['type']) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <ArrowRight className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSourceBadge = (source: CDMEvent['source']) => {
    switch (source) {
      case 'cdm': return <Badge variant="outline" className="text-xs">CDM</Badge>;
      case 'server': return <Badge variant="outline" className="text-xs text-purple-400">Server</Badge>;
      default: return <Badge variant="outline" className="text-xs text-blue-400">System</Badge>;
    }
  };

  const LevelIcon = securityLevelInfo[securityLevel].icon;

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Cpu className="w-6 h-6 text-primary" />
          CDM Simulator
        </h1>
        <p className="text-muted-foreground mt-1">
          Simulate Content Decryption Module behavior at different security levels
        </p>
      </div>

      <Alert className="mb-6">
        <Shield className="h-4 w-4" />
        <AlertTitle>Understanding CDM Security Levels</AlertTitle>
        <AlertDescription>
          The CDM (Content Decryption Module) is the core component that handles license
          acquisition and content decryption. Security levels determine how well protected
          the decryption keys are from extraction.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Security Level</CardTitle>
              <CardDescription>Select CDM protection level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {(['L1', 'L2', 'L3'] as SecurityLevel[]).map((level) => {
                const info = securityLevelInfo[level];
                const Icon = info.icon;
                return (
                  <Button
                    key={level}
                    variant={securityLevel === level ? 'default' : 'outline'}
                    className="w-full justify-start h-auto py-3"
                    onClick={() => {
                      setSecurityLevel(level);
                      resetSimulation();
                    }}
                    disabled={isPlaying}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${info.color}`} />
                    <div className="text-left">
                      <div className="font-medium">Level {level.charAt(1)}</div>
                      <div className="text-xs text-muted-foreground font-normal">
                        {info.description}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Simulation Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={runSimulation}
                disabled={isPlaying}
                className="w-full gap-2"
              >
                <Play className="w-4 h-4" />
                Run Simulation
              </Button>

              <Button
                variant="outline"
                onClick={resetSimulation}
                disabled={isPlaying}
                className="w-full gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>

              <Separator />

              <div className="flex items-center justify-between">
                <Label className="text-sm flex items-center gap-2">
                  {showKeys ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  Show Keys
                </Label>
                <Switch checked={showKeys} onCheckedChange={setShowKeys} />
              </div>

              {securityLevel === 'L3' && showKeys && (
                <Alert variant="destructive" className="text-xs">
                  <AlertTriangle className="h-3 w-3" />
                  <AlertDescription>
                    L3 keys are vulnerable to memory extraction!
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">CDM State</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">State</span>
                  <Badge variant={cdmState === 'ready' ? 'default' : 'outline'}>
                    {cdmState}
                  </Badge>
                </div>

                {sessionId && (
                  <div>
                    <span className="text-sm text-muted-foreground">Session</span>
                    <code className="block text-xs bg-zinc-950 p-2 rounded mt-1 truncate">
                      {sessionId}
                    </code>
                  </div>
                )}

                {contentKey && showKeys && (
                  <div>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Key className="w-3 h-3" />
                      Content Key
                    </span>
                    <code className={`block text-xs p-2 rounded mt-1 truncate ${
                      securityLevel === 'L1'
                        ? 'bg-green-500/10 text-green-400'
                        : securityLevel === 'L2'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-red-500/10 text-red-400'
                    }`}>
                      {securityLevel === 'L1' ? '[PROTECTED IN TEE]' : contentKey}
                    </code>
                  </div>
                )}

                <Progress value={(currentStep / 7) * 100} className="mt-4" />
                <div className="text-xs text-center text-muted-foreground">
                  Step {currentStep} of 7
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Visualization */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">License Acquisition Flow</CardTitle>
            <CardDescription>
              Watch the complete DRM handshake process
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Flow Diagram */}
            <div className="mb-6 p-4 rounded-lg border bg-zinc-950">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className={`p-3 rounded-lg mx-auto mb-2 w-fit ${
                    currentStep >= 1 ? 'bg-primary/20' : 'bg-muted'
                  }`}>
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-medium">Client</div>
                  <div className="text-xs text-muted-foreground">CDM</div>
                </div>

                <div className="flex-1 flex items-center justify-center gap-1">
                  <ArrowRight className={`w-4 h-4 ${currentStep >= 3 ? 'text-primary' : 'text-muted'}`} />
                  <ArrowRight className={`w-4 h-4 ${currentStep >= 3 ? 'text-primary' : 'text-muted'}`} />
                  <Badge variant="outline" className="text-xs">
                    License Request
                  </Badge>
                  <ArrowRight className={`w-4 h-4 ${currentStep >= 3 ? 'text-primary' : 'text-muted'}`} />
                  <ArrowRight className={`w-4 h-4 ${currentStep >= 3 ? 'text-primary' : 'text-muted'}`} />
                </div>

                <div className="text-center">
                  <div className={`p-3 rounded-lg mx-auto mb-2 w-fit ${
                    currentStep >= 4 ? 'bg-purple-500/20' : 'bg-muted'
                  }`}>
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-medium">License Server</div>
                  <div className="text-xs text-muted-foreground">DRM</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 mt-4">
                <ArrowRight className={`w-4 h-4 rotate-180 ${currentStep >= 5 ? 'text-green-500' : 'text-muted'}`} />
                <ArrowRight className={`w-4 h-4 rotate-180 ${currentStep >= 5 ? 'text-green-500' : 'text-muted'}`} />
                <Badge variant="outline" className="text-xs bg-green-500/10">
                  License Response
                </Badge>
                <ArrowRight className={`w-4 h-4 rotate-180 ${currentStep >= 5 ? 'text-green-500' : 'text-muted'}`} />
                <ArrowRight className={`w-4 h-4 rotate-180 ${currentStep >= 5 ? 'text-green-500' : 'text-muted'}`} />
              </div>
            </div>

            {/* Event Log */}
            <ScrollArea className="h-[350px] pr-4">
              {events.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <Cpu className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Click &quot;Run Simulation&quot; to start</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`p-3 rounded-lg border ${
                        event.type === 'error' ? 'border-red-500/30 bg-red-500/5' :
                        event.type === 'success' ? 'border-green-500/30 bg-green-500/5' :
                        event.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/5' :
                        'border-muted bg-muted/30'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {getEventIcon(event.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {getSourceBadge(event.source)}
                            <span className="text-xs text-muted-foreground">
                              {event.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm">{event.message}</p>
                          {event.details && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {event.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Security Level Comparison */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Security Level Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Feature</th>
                  <th className="text-center py-2 px-4">L1 (Hardware TEE)</th>
                  <th className="text-center py-2 px-4">L2 (Hybrid)</th>
                  <th className="text-center py-2 px-4">L3 (Software)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Key Storage</td>
                  <td className="text-center py-2 px-4"><CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-2 px-4"><AlertTriangle className="w-4 h-4 text-yellow-500 mx-auto" /></td>
                  <td className="text-center py-2 px-4"><XCircle className="w-4 h-4 text-red-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Decryption Location</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Hardware TEE</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Hardware Engine</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Software/Memory</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Max Resolution</td>
                  <td className="text-center py-2 px-4 text-xs">4K HDR</td>
                  <td className="text-center py-2 px-4 text-xs">1080p</td>
                  <td className="text-center py-2 px-4 text-xs">480p</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Extraction Risk</td>
                  <td className="text-center py-2 px-4 text-xs text-green-400">Very Low</td>
                  <td className="text-center py-2 px-4 text-xs text-yellow-400">Medium</td>
                  <td className="text-center py-2 px-4 text-xs text-red-400">High</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Typical Devices</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Smart TVs, Set-top boxes</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Some Android devices</td>
                  <td className="text-center py-2 px-4 text-xs text-muted-foreground">Desktop browsers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
