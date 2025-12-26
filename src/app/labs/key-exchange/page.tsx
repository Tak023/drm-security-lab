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
  Key,
  Lock,
  ArrowRight,
  ArrowLeftRight,
  Shield,
  User,
  Server,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { bytesToHex, generateKey } from '@/lib/drm/crypto';

interface KeyExchangeStep {
  id: string;
  actor: 'client' | 'server' | 'shared';
  title: string;
  description: string;
  value?: string;
  status: 'pending' | 'complete';
}

export default function KeyExchangePage() {
  const [steps, setSteps] = useState<KeyExchangeStep[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [exchangeType, setExchangeType] = useState<'dh' | 'rsa'>('dh');

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runDHExchange = async () => {
    setIsRunning(true);
    setSteps([]);

    // Simulated DH parameters
    const p = 23; // Small prime for demo
    const g = 5;  // Generator

    // Step 1: Agree on parameters
    setSteps([{
      id: '1',
      actor: 'shared',
      title: 'Agree on Parameters',
      description: `Both parties agree on prime p=${p} and generator g=${g}`,
      value: `p=${p}, g=${g}`,
      status: 'complete',
    }]);
    await delay(800);

    // Step 2: Client generates private key
    const clientPrivate = Math.floor(Math.random() * 10) + 1;
    const clientPublic = Math.pow(g, clientPrivate) % p;
    setSteps(prev => [...prev, {
      id: '2',
      actor: 'client',
      title: 'Client Private Key',
      description: `Client chooses secret a=${clientPrivate}`,
      value: `a = ${clientPrivate} (secret)`,
      status: 'complete',
    }]);
    await delay(600);

    setSteps(prev => [...prev, {
      id: '3',
      actor: 'client',
      title: 'Client Public Key',
      description: `Client computes A = g^a mod p = ${g}^${clientPrivate} mod ${p}`,
      value: `A = ${clientPublic}`,
      status: 'complete',
    }]);
    await delay(600);

    // Step 3: Server generates private key
    const serverPrivate = Math.floor(Math.random() * 10) + 1;
    const serverPublic = Math.pow(g, serverPrivate) % p;
    setSteps(prev => [...prev, {
      id: '4',
      actor: 'server',
      title: 'Server Private Key',
      description: `Server chooses secret b=${serverPrivate}`,
      value: `b = ${serverPrivate} (secret)`,
      status: 'complete',
    }]);
    await delay(600);

    setSteps(prev => [...prev, {
      id: '5',
      actor: 'server',
      title: 'Server Public Key',
      description: `Server computes B = g^b mod p = ${g}^${serverPrivate} mod ${p}`,
      value: `B = ${serverPublic}`,
      status: 'complete',
    }]);
    await delay(600);

    // Step 4: Exchange public keys
    setSteps(prev => [...prev, {
      id: '6',
      actor: 'shared',
      title: 'Exchange Public Keys',
      description: 'Client sends A to server, server sends B to client',
      value: `Client→Server: ${clientPublic}, Server→Client: ${serverPublic}`,
      status: 'complete',
    }]);
    await delay(800);

    // Step 5: Compute shared secret
    const clientShared = Math.pow(serverPublic, clientPrivate) % p;
    const serverShared = Math.pow(clientPublic, serverPrivate) % p;

    setSteps(prev => [...prev, {
      id: '7',
      actor: 'client',
      title: 'Client Computes Shared Secret',
      description: `s = B^a mod p = ${serverPublic}^${clientPrivate} mod ${p}`,
      value: `s = ${clientShared}`,
      status: 'complete',
    }]);
    await delay(600);

    setSteps(prev => [...prev, {
      id: '8',
      actor: 'server',
      title: 'Server Computes Shared Secret',
      description: `s = A^b mod p = ${clientPublic}^${serverPrivate} mod ${p}`,
      value: `s = ${serverShared}`,
      status: 'complete',
    }]);
    await delay(600);

    // Final verification
    setSteps(prev => [...prev, {
      id: '9',
      actor: 'shared',
      title: 'Shared Secret Established!',
      description: `Both parties now share secret ${clientShared} for encryption`,
      value: clientShared === serverShared ? 'Secrets Match!' : 'Error!',
      status: 'complete',
    }]);

    setIsRunning(false);
  };

  const runRSAExchange = async () => {
    setIsRunning(true);
    setSteps([]);

    // Step 1: Server generates key pair
    setSteps([{
      id: '1',
      actor: 'server',
      title: 'Generate RSA Key Pair',
      description: 'Server generates public/private key pair',
      value: `n=3233, e=17, d=2753`,
      status: 'complete',
    }]);
    await delay(800);

    // Step 2: Share public key
    setSteps(prev => [...prev, {
      id: '2',
      actor: 'server',
      title: 'Share Public Key',
      description: 'Server sends public key (n, e) to client',
      value: `Public: (n=3233, e=17)`,
      status: 'complete',
    }]);
    await delay(600);

    // Step 3: Client generates session key
    const sessionKey = bytesToHex(generateKey(16));
    setSteps(prev => [...prev, {
      id: '3',
      actor: 'client',
      title: 'Generate Session Key',
      description: 'Client generates random AES session key',
      value: sessionKey.substring(0, 32) + '...',
      status: 'complete',
    }]);
    await delay(600);

    // Step 4: Encrypt session key
    setSteps(prev => [...prev, {
      id: '4',
      actor: 'client',
      title: 'Encrypt Session Key',
      description: 'Client encrypts session key with server public key',
      value: bytesToHex(generateKey(32)).substring(0, 32) + '...',
      status: 'complete',
    }]);
    await delay(600);

    // Step 5: Send encrypted key
    setSteps(prev => [...prev, {
      id: '5',
      actor: 'shared',
      title: 'Send Encrypted Key',
      description: 'Client sends encrypted session key to server',
      status: 'complete',
    }]);
    await delay(600);

    // Step 6: Server decrypts
    setSteps(prev => [...prev, {
      id: '6',
      actor: 'server',
      title: 'Decrypt Session Key',
      description: 'Server decrypts using private key d',
      value: sessionKey.substring(0, 32) + '...',
      status: 'complete',
    }]);
    await delay(600);

    // Final
    setSteps(prev => [...prev, {
      id: '7',
      actor: 'shared',
      title: 'Secure Channel Established!',
      description: 'Both parties share the AES session key',
      value: 'Keys Match!',
      status: 'complete',
    }]);

    setIsRunning(false);
  };

  const handleRun = () => {
    if (exchangeType === 'dh') {
      runDHExchange();
    } else {
      runRSAExchange();
    }
  };

  const getActorColor = (actor: string) => {
    switch (actor) {
      case 'client': return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 'server': return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      case 'shared': return 'bg-green-500/10 border-green-500/30 text-green-400';
      default: return '';
    }
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Key className="w-6 h-6 text-primary" />
          Key Exchange Lab
        </h1>
        <p className="text-muted-foreground mt-1">
          Visualize Diffie-Hellman and RSA key exchange protocols
        </p>
      </div>

      <Alert className="mb-6">
        <Shield className="h-4 w-4" />
        <AlertTitle>How DRM Uses Key Exchange</AlertTitle>
        <AlertDescription>
          DRM systems use key exchange protocols to securely transfer content decryption keys
          from the license server to the client. This ensures only authorized devices can decrypt content.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Exchange Protocol</CardTitle>
            <CardDescription>Select key exchange method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button
                variant={exchangeType === 'dh' ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => setExchangeType('dh')}
                disabled={isRunning}
              >
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Diffie-Hellman
              </Button>
              <Button
                variant={exchangeType === 'rsa' ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => setExchangeType('rsa')}
                disabled={isRunning}
              >
                <Lock className="w-4 h-4 mr-2" />
                RSA Key Transport
              </Button>
            </div>

            <Separator />

            <Button
              onClick={handleRun}
              disabled={isRunning}
              className="w-full gap-2"
            >
              {isRunning ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Key className="w-4 h-4" />
              )}
              {isRunning ? 'Running...' : 'Run Exchange'}
            </Button>

            <div className="text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 text-blue-400" /> Client
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-3 h-3 text-purple-400" /> Server
              </div>
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="w-3 h-3 text-green-400" /> Shared
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exchange Steps */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Exchange Process</CardTitle>
            <CardDescription>Step-by-step key exchange visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {steps.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Key className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a protocol and run the exchange</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`p-4 rounded-lg border ${getActorColor(step.actor)}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step {index + 1}
                        </Badge>
                        <Badge variant="outline" className="text-xs capitalize">
                          {step.actor}
                        </Badge>
                        {step.status === 'complete' && (
                          <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                        )}
                      </div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      {step.value && (
                        <code className="text-xs bg-background/50 px-2 py-1 rounded mt-2 inline-block">
                          {step.value}
                        </code>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
