'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  Shield,
  Fingerprint,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Smartphone,
  Server,
  Lock,
  Unlock,
  Key,
  RefreshCw,
  ShieldCheck,
  ShieldX,
  Cpu,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { bytesToHex, generateKey, simpleHash, stringToBytes } from '@/lib/drm/crypto';

interface DeviceProperties {
  id: string;
  manufacturer: string;
  model: string;
  osVersion: string;
  securityPatchLevel: string;
  bootloaderLocked: boolean;
  rootDetected: boolean;
  debuggingEnabled: boolean;
  emulatorDetected: boolean;
  tamperDetected: boolean;
  certificateValid: boolean;
  teePresent: boolean;
}

interface AttestationResult {
  success: boolean;
  securityLevel: 'L1' | 'L2' | 'L3' | 'rejected';
  warnings: string[];
  errors: string[];
  timestamp: number;
  nonce: string;
  signature: string;
}

export function AttestationLab() {
  const { perspective } = usePerspective();
  const [device, setDevice] = useState<DeviceProperties>({
    id: bytesToHex(generateKey(8)),
    manufacturer: 'Google',
    model: 'Pixel 8 Pro',
    osVersion: 'Android 14',
    securityPatchLevel: '2024-01-05',
    bootloaderLocked: true,
    rootDetected: false,
    debuggingEnabled: false,
    emulatorDetected: false,
    tamperDetected: false,
    certificateValid: true,
    teePresent: true,
  });
  const [attestationResult, setAttestationResult] = useState<AttestationResult | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isAttesting, setIsAttesting] = useState(false);

  const addLog = useCallback((message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }, []);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runAttestation = async () => {
    setIsAttesting(true);
    setLogs([]);
    setAttestationResult(null);

    const nonce = bytesToHex(generateKey(16));

    addLog('Starting device attestation...');
    addLog(`Nonce: ${nonce}`);
    await delay(500);

    // Check device properties
    const warnings: string[] = [];
    const errors: string[] = [];
    let securityLevel: 'L1' | 'L2' | 'L3' | 'rejected' = 'L1';

    addLog('Checking bootloader status...');
    await delay(300);
    if (!device.bootloaderLocked) {
      errors.push('Bootloader is unlocked');
      securityLevel = 'rejected';
      addLog('FAIL: Bootloader unlocked - device compromised');
    } else {
      addLog('PASS: Bootloader locked');
    }

    addLog('Checking for root/superuser...');
    await delay(300);
    if (device.rootDetected) {
      errors.push('Root access detected');
      securityLevel = 'rejected';
      addLog('FAIL: Root detected - cannot trust device');
    } else {
      addLog('PASS: No root detected');
    }

    addLog('Checking debugging status...');
    await delay(300);
    if (device.debuggingEnabled) {
      warnings.push('USB debugging enabled');
      if (securityLevel === 'L1') securityLevel = 'L2';
      addLog('WARN: Debugging enabled - reduced security level');
    } else {
      addLog('PASS: Debugging disabled');
    }

    addLog('Checking for emulator...');
    await delay(300);
    if (device.emulatorDetected) {
      errors.push('Emulator detected');
      securityLevel = 'rejected';
      addLog('FAIL: Emulator detected - not a real device');
    } else {
      addLog('PASS: Real device confirmed');
    }

    addLog('Checking app integrity...');
    await delay(300);
    if (device.tamperDetected) {
      errors.push('App tampering detected');
      securityLevel = 'rejected';
      addLog('FAIL: App tampering detected');
    } else {
      addLog('PASS: App integrity verified');
    }

    addLog('Verifying device certificate...');
    await delay(300);
    if (!device.certificateValid) {
      errors.push('Invalid device certificate');
      securityLevel = 'rejected';
      addLog('FAIL: Device certificate invalid or revoked');
    } else {
      addLog('PASS: Device certificate valid');
    }

    addLog('Checking TEE availability...');
    await delay(300);
    if (!device.teePresent) {
      warnings.push('No hardware security module');
      if (securityLevel === 'L1') securityLevel = 'L2';
      if (securityLevel === 'L2') securityLevel = 'L3';
      addLog('WARN: No TEE - software-only security');
    } else {
      addLog('PASS: Hardware TEE present');
    }

    // Generate attestation signature
    const attestationData = JSON.stringify({
      nonce,
      device: device.id,
      timestamp: Date.now(),
      securityLevel,
    });
    const signature = simpleHash(stringToBytes(attestationData));

    addLog('Generating attestation signature...');
    await delay(400);
    addLog(`Signature: ${signature.substring(0, 32)}...`);

    const result: AttestationResult = {
      success: securityLevel !== 'rejected',
      securityLevel,
      warnings,
      errors,
      timestamp: Date.now(),
      nonce,
      signature,
    };

    setAttestationResult(result);

    if (result.success) {
      addLog(`Attestation PASSED - Security Level: ${securityLevel}`);
    } else {
      addLog('Attestation FAILED - Device rejected');
    }

    setIsAttesting(false);
  };

  const toggleDeviceProperty = (property: keyof DeviceProperties) => {
    setDevice(prev => ({
      ...prev,
      [property]: !prev[property as keyof DeviceProperties],
    }));
    setAttestationResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Fingerprint className="w-6 h-6 text-blue-500" />
            Device Attestation
          </h1>
          <p className="text-muted-foreground mt-1">
            Simulate device integrity verification for DRM security
          </p>
        </div>
        <Badge variant={perspective === 'blue-team' ? 'default' : 'secondary'}>
          {perspective === 'blue-team' ? 'Defense Mode' : 'Analysis Mode'}
        </Badge>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Blue Team Defense</AlertTitle>
        <AlertDescription>
          Device attestation verifies that a device is genuine, unmodified, and meets
          security requirements before issuing DRM licenses.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="simulation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulation" className="gap-2">
            <Smartphone className="w-4 h-4" />
            Simulation
          </TabsTrigger>
          <TabsTrigger value="implementation" className="gap-2">
            <Cpu className="w-4 h-4" />
            Implementation
          </TabsTrigger>
          <TabsTrigger value="attacks" className="gap-2">
            <AlertTriangle className="w-4 h-4" />
            Attack Resistance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Device Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Device Configuration
                </CardTitle>
                <CardDescription>Toggle device properties to test</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className={`w-4 h-4 ${device.bootloaderLocked ? 'text-green-500' : 'text-red-500'}`} />
                      <span className="text-sm">Bootloader Locked</span>
                    </div>
                    <Switch
                      checked={device.bootloaderLocked}
                      onCheckedChange={() => toggleDeviceProperty('bootloaderLocked')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Key className={`w-4 h-4 ${!device.rootDetected ? 'text-green-500' : 'text-red-500'}`} />
                      <span className="text-sm">Root Detected</span>
                    </div>
                    <Switch
                      checked={device.rootDetected}
                      onCheckedChange={() => toggleDeviceProperty('rootDetected')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 ${!device.debuggingEnabled ? 'text-green-500' : 'text-yellow-500'}`} />
                      <span className="text-sm">Debugging Enabled</span>
                    </div>
                    <Switch
                      checked={device.debuggingEnabled}
                      onCheckedChange={() => toggleDeviceProperty('debuggingEnabled')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className={`w-4 h-4 ${!device.emulatorDetected ? 'text-green-500' : 'text-red-500'}`} />
                      <span className="text-sm">Emulator Detected</span>
                    </div>
                    <Switch
                      checked={device.emulatorDetected}
                      onCheckedChange={() => toggleDeviceProperty('emulatorDetected')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className={`w-4 h-4 ${!device.tamperDetected ? 'text-green-500' : 'text-red-500'}`} />
                      <span className="text-sm">Tampering Detected</span>
                    </div>
                    <Switch
                      checked={device.tamperDetected}
                      onCheckedChange={() => toggleDeviceProperty('tamperDetected')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${device.certificateValid ? 'text-green-500' : 'text-red-500'}`} />
                      <span className="text-sm">Certificate Valid</span>
                    </div>
                    <Switch
                      checked={device.certificateValid}
                      onCheckedChange={() => toggleDeviceProperty('certificateValid')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Fingerprint className={`w-4 h-4 ${device.teePresent ? 'text-green-500' : 'text-yellow-500'}`} />
                      <span className="text-sm">TEE Present</span>
                    </div>
                    <Switch
                      checked={device.teePresent}
                      onCheckedChange={() => toggleDeviceProperty('teePresent')}
                    />
                  </div>
                </div>

                <Separator />

                <Button
                  onClick={runAttestation}
                  disabled={isAttesting}
                  className="w-full gap-2"
                >
                  <Fingerprint className="w-4 h-4" />
                  {isAttesting ? 'Attesting...' : 'Run Attestation'}
                </Button>
              </CardContent>
            </Card>

            {/* Attestation Result */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Attestation Result
                </CardTitle>
                <CardDescription>Server-side verification result</CardDescription>
              </CardHeader>
              <CardContent>
                {attestationResult ? (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg border ${
                      attestationResult.success
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {attestationResult.success ? (
                          <ShieldCheck className="w-6 h-6 text-green-500" />
                        ) : (
                          <ShieldX className="w-6 h-6 text-red-500" />
                        )}
                        <span className={`font-bold ${attestationResult.success ? 'text-green-400' : 'text-red-400'}`}>
                          {attestationResult.success ? 'ATTESTATION PASSED' : 'ATTESTATION FAILED'}
                        </span>
                      </div>
                      {attestationResult.success && (
                        <Badge className="mt-2" variant={
                          attestationResult.securityLevel === 'L1' ? 'default' :
                          attestationResult.securityLevel === 'L2' ? 'secondary' : 'outline'
                        }>
                          Security Level: {attestationResult.securityLevel}
                        </Badge>
                      )}
                    </div>

                    {attestationResult.errors.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-sm font-medium text-red-400">Errors:</span>
                        {attestationResult.errors.map((err, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-red-400">
                            <XCircle className="w-3 h-3" />
                            {err}
                          </div>
                        ))}
                      </div>
                    )}

                    {attestationResult.warnings.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-sm font-medium text-yellow-400">Warnings:</span>
                        {attestationResult.warnings.map((warn, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-yellow-400">
                            <AlertTriangle className="w-3 h-3" />
                            {warn}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground space-y-1 mt-4">
                      <div>Nonce: <code>{attestationResult.nonce.substring(0, 16)}...</code></div>
                      <div>Signature: <code>{attestationResult.signature.substring(0, 16)}...</code></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Fingerprint className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Run attestation to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attestation Log</CardTitle>
                <CardDescription>Step-by-step verification</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[350px] rounded-lg border bg-zinc-950 p-3">
                  {logs.length === 0 ? (
                    <div className="text-center text-muted-foreground text-sm py-8">
                      Run attestation to see log...
                    </div>
                  ) : (
                    <div className="space-y-1 font-mono text-xs">
                      {logs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            log.includes('PASS') ? 'text-green-400' :
                            log.includes('FAIL') ? 'text-red-400' :
                            log.includes('WARN') ? 'text-yellow-400' :
                            log.includes('PASSED') ? 'text-green-400 font-bold' :
                            log.includes('FAILED') ? 'text-red-400 font-bold' :
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

        <TabsContent value="implementation" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Android SafetyNet / Play Integrity</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Google&apos;s Play Integrity API provides three verdicts:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Device Recognition:</strong> Is this a genuine Android device?</li>
                    <li><strong>App Integrity:</strong> Is this the genuine, unmodified app?</li>
                    <li><strong>License Status:</strong> Is the user entitled to use the app?</li>
                  </ul>
                  <p>
                    For DRM, the device integrity verdict determines security level eligibility.
                    Devices that fail attestation are denied high-quality content.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>iOS DeviceCheck / App Attest</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Apple provides similar attestation through:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>DeviceCheck:</strong> Per-device tokens without device identification</li>
                    <li><strong>App Attest:</strong> Hardware-backed cryptographic attestation</li>
                    <li><strong>Secure Enclave:</strong> Hardware protection for keys and attestation</li>
                  </ul>
                  <p>
                    FairPlay DRM leverages these mechanisms to verify device integrity
                    before issuing content keys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attacks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attestation Bypass Attempts</CardTitle>
              <CardDescription>How attackers try to defeat attestation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10">
                  <h4 className="font-medium text-red-400 mb-2">Magisk Hide / Zygisk</h4>
                  <p className="text-xs text-muted-foreground">
                    Attempts to hide root access from detection. Modern attestation
                    uses hardware-backed checks that are harder to bypass.
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10">
                  <h4 className="font-medium text-red-400 mb-2">Key Attestation Spoofing</h4>
                  <p className="text-xs text-muted-foreground">
                    Attempting to provide fake attestation certificates. Hardware
                    attestation with certificate chains makes this very difficult.
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/10">
                  <h4 className="font-medium text-green-400 mb-2">Defense: Nonce Challenges</h4>
                  <p className="text-xs text-muted-foreground">
                    Server-provided nonces prevent replay attacks. Each attestation
                    request requires a fresh challenge.
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/10">
                  <h4 className="font-medium text-green-400 mb-2">Defense: Certificate Chains</h4>
                  <p className="text-xs text-muted-foreground">
                    Verify attestation certificates chain to Google/Apple roots.
                    Check certificate validity and revocation status.
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
