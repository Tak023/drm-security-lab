"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RefreshCw,
  Play,
  Lock,
  Key,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Shield,
  Laptop,
  Server,
} from "lucide-react";
import {
  generatePrime,
  generateGenerator,
  generatePrivateKey,
  computePublicKey,
  computeSharedSecret,
} from "@/lib/crypto";

type Protocol = "diffie-hellman" | "rsa";

interface Step {
  id: number;
  title: string;
  description: string;
  clientValue?: string;
  serverValue?: string;
  sharedValue?: string;
  completed: boolean;
}

export function KeyExchangeLab() {
  const [protocol, setProtocol] = useState<Protocol>("diffie-hellman");
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([]);
  const [params, setParams] = useState<{
    p?: number;
    g?: number;
    clientPrivate?: number;
    serverPrivate?: number;
    clientPublic?: number;
    serverPublic?: number;
    sharedSecret?: number;
  }>({});

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runDiffieHellman = useCallback(async () => {
    setIsRunning(true);
    setSteps([]);
    setParams({});
    setCurrentStep(0);

    // Step 1: Generate public parameters
    const p = generatePrime();
    const g = generateGenerator(p);
    setParams((prev) => ({ ...prev, p, g }));
    setSteps([
      {
        id: 1,
        title: "Generate Public Parameters",
        description: `Both parties agree on public parameters: prime p=${p}, generator g=${g}`,
        sharedValue: `p=${p}, g=${g}`,
        completed: true,
      },
    ]);
    setCurrentStep(1);
    await delay(1000);

    // Step 2: Generate private keys
    const clientPrivate = generatePrivateKey(p);
    const serverPrivate = generatePrivateKey(p);
    setParams((prev) => ({ ...prev, clientPrivate, serverPrivate }));
    setSteps((prev) => [
      ...prev,
      {
        id: 2,
        title: "Generate Private Keys",
        description: "Each party generates a secret private key",
        clientValue: `a=${clientPrivate} (secret)`,
        serverValue: `b=${serverPrivate} (secret)`,
        completed: true,
      },
    ]);
    setCurrentStep(2);
    await delay(1000);

    // Step 3: Compute public keys
    const clientPublic = computePublicKey(g, clientPrivate, p);
    const serverPublic = computePublicKey(g, serverPrivate, p);
    setParams((prev) => ({ ...prev, clientPublic, serverPublic }));
    setSteps((prev) => [
      ...prev,
      {
        id: 3,
        title: "Compute Public Keys",
        description: `Compute A = g^a mod p and B = g^b mod p`,
        clientValue: `A = ${g}^${clientPrivate} mod ${p} = ${clientPublic}`,
        serverValue: `B = ${g}^${serverPrivate} mod ${p} = ${serverPublic}`,
        completed: true,
      },
    ]);
    setCurrentStep(3);
    await delay(1000);

    // Step 4: Exchange public keys
    setSteps((prev) => [
      ...prev,
      {
        id: 4,
        title: "Exchange Public Keys",
        description: "Public keys are exchanged over the insecure channel",
        clientValue: `Receives B=${serverPublic}`,
        serverValue: `Receives A=${clientPublic}`,
        completed: true,
      },
    ]);
    setCurrentStep(4);
    await delay(1000);

    // Step 5: Compute shared secret
    const clientShared = computeSharedSecret(serverPublic, clientPrivate, p);
    const serverShared = computeSharedSecret(clientPublic, serverPrivate, p);
    setParams((prev) => ({ ...prev, sharedSecret: clientShared }));
    setSteps((prev) => [
      ...prev,
      {
        id: 5,
        title: "Compute Shared Secret",
        description: "Both parties compute the same shared secret!",
        clientValue: `s = B^a mod p = ${serverPublic}^${clientPrivate} mod ${p} = ${clientShared}`,
        serverValue: `s = A^b mod p = ${clientPublic}^${serverPrivate} mod ${p} = ${serverShared}`,
        sharedValue: clientShared === serverShared ? `Shared Secret: ${clientShared}` : "ERROR: Secrets don't match!",
        completed: true,
      },
    ]);
    setCurrentStep(5);
    await delay(500);

    // Step 6: Derive session key
    setSteps((prev) => [
      ...prev,
      {
        id: 6,
        title: "Derive Session Key",
        description: "The shared secret is used to derive an AES session key for encryption",
        sharedValue: `Session Key: ${clientShared.toString(16).padStart(8, '0').toUpperCase()}`,
        completed: true,
      },
    ]);
    setCurrentStep(6);

    setIsRunning(false);
  }, []);

  const reset = () => {
    setSteps([]);
    setParams({});
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <div className="space-y-6">
      {/* Protocol Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Protocol:</span>
        <div className="flex gap-2">
          <Button
            variant={protocol === "diffie-hellman" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setProtocol("diffie-hellman");
              reset();
            }}
          >
            Diffie-Hellman
          </Button>
          <Button
            variant={protocol === "rsa" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setProtocol("rsa");
              reset();
            }}
          >
            RSA Key Transport
          </Button>
        </div>
      </div>

      {/* Main Visualization */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Client Side */}
        <Card className="border-blue-500/30 bg-blue-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <Laptop className="h-5 w-5" />
              Client (CDM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {params.clientPrivate && (
              <div className="rounded-lg bg-blue-500/10 p-3">
                <p className="text-xs text-muted-foreground">Private Key (Secret)</p>
                <p className="font-mono text-sm text-blue-400">a = {params.clientPrivate}</p>
              </div>
            )}
            {params.clientPublic && (
              <div className="rounded-lg bg-blue-500/10 p-3">
                <p className="text-xs text-muted-foreground">Public Key</p>
                <p className="font-mono text-sm text-blue-400">A = {params.clientPublic}</p>
              </div>
            )}
            {params.sharedSecret && (
              <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                <p className="text-xs text-muted-foreground">Computed Secret</p>
                <p className="font-mono text-sm text-green-400">{params.sharedSecret}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Exchange Channel */}
        <Card className="border-purple-500/30 bg-purple-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <ArrowRight className="h-5 w-5" />
              Public Channel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {params.p && params.g && (
              <div className="rounded-lg bg-purple-500/10 p-3">
                <p className="text-xs text-muted-foreground">Public Parameters</p>
                <p className="font-mono text-sm text-purple-400">p = {params.p}</p>
                <p className="font-mono text-sm text-purple-400">g = {params.g}</p>
              </div>
            )}
            {params.clientPublic && params.serverPublic && (
              <div className="rounded-lg bg-purple-500/10 p-3">
                <p className="text-xs text-muted-foreground">Exchanged Public Keys</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-400">A={params.clientPublic}</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                  <span className="text-orange-400">B={params.serverPublic}</span>
                </div>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center">
              An attacker can see these values but cannot derive the shared secret!
            </p>
          </CardContent>
        </Card>

        {/* Server Side */}
        <Card className="border-orange-500/30 bg-orange-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-orange-400">
              <Server className="h-5 w-5" />
              License Server
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {params.serverPrivate && (
              <div className="rounded-lg bg-orange-500/10 p-3">
                <p className="text-xs text-muted-foreground">Private Key (Secret)</p>
                <p className="font-mono text-sm text-orange-400">b = {params.serverPrivate}</p>
              </div>
            )}
            {params.serverPublic && (
              <div className="rounded-lg bg-orange-500/10 p-3">
                <p className="text-xs text-muted-foreground">Public Key</p>
                <p className="font-mono text-sm text-orange-400">B = {params.serverPublic}</p>
              </div>
            )}
            {params.sharedSecret && (
              <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                <p className="text-xs text-muted-foreground">Computed Secret</p>
                <p className="font-mono text-sm text-green-400">{params.sharedSecret}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Steps Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Exchange Process</span>
            <div className="flex gap-2">
              <Button
                onClick={runDiffieHellman}
                disabled={isRunning}
                className="gap-2"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Run Exchange
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={reset} disabled={isRunning}>
                Reset
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {steps.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Click &quot;Run Exchange&quot; to start the Diffie-Hellman key exchange demonstration</p>
            </div>
          ) : (
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex gap-4 ${
                    index < currentStep ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        step.completed
                          ? "bg-green-500/20 text-green-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="h-full w-px bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                    <div className="grid gap-2 mt-3 sm:grid-cols-2">
                      {step.clientValue && (
                        <div className="rounded bg-blue-500/10 px-3 py-2">
                          <p className="text-xs text-blue-400 font-mono">
                            {step.clientValue}
                          </p>
                        </div>
                      )}
                      {step.serverValue && (
                        <div className="rounded bg-orange-500/10 px-3 py-2">
                          <p className="text-xs text-orange-400 font-mono">
                            {step.serverValue}
                          </p>
                        </div>
                      )}
                    </div>
                    {step.sharedValue && (
                      <div className="rounded bg-green-500/10 px-3 py-2 mt-2 border border-green-500/30">
                        <p className="text-xs text-green-400 font-mono text-center">
                          {step.sharedValue}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Note */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="flex items-start gap-3 pt-6">
          <Shield className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-500">Security Note</p>
            <p className="text-sm text-muted-foreground mt-1">
              In real DRM systems like Widevine, the key exchange is more complex and uses
              elliptic curve cryptography (ECDH) for better security. The CDM&apos;s private key
              is protected in hardware (TEE) to prevent extraction.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
