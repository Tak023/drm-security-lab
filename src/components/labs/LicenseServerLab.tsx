"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Laptop,
  ArrowRight,
  ArrowLeft,
  Key,
  Shield,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
  Play,
  FileText,
  Lock,
} from "lucide-react";
import { generateHexKey } from "@/lib/crypto";

interface LicenseRequest {
  deviceId: string;
  contentId: string;
  sessionId: string;
  timestamp: number;
  clientToken: string;
}

interface License {
  contentKey: string;
  keyId: string;
  policy: {
    expiresAt: number;
    hdcpRequired: boolean;
    securityLevel: number;
    allowedOutputs: string[];
  };
  signature: string;
}

type Step = {
  id: number;
  title: string;
  status: "pending" | "active" | "success" | "error";
  data?: object;
  message?: string;
};

export function LicenseServerLab() {
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<Step[]>([]);
  const [request, setRequest] = useState<LicenseRequest | null>(null);
  const [license, setLicense] = useState<License | null>(null);
  const [securityLevel, setSecurityLevel] = useState<1 | 2 | 3>(1);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const updateStep = (id: number, updates: Partial<Step>) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, ...updates } : step))
    );
  };

  const runLicenseFlow = async () => {
    setIsRunning(true);
    setRequest(null);
    setLicense(null);

    const initialSteps: Step[] = [
      { id: 1, title: "Generate License Request", status: "pending" },
      { id: 2, title: "Send Request to Server", status: "pending" },
      { id: 3, title: "Server Validates Device", status: "pending" },
      { id: 4, title: "Check Content Rights", status: "pending" },
      { id: 5, title: "Generate Content Key", status: "pending" },
      { id: 6, title: "Apply License Policy", status: "pending" },
      { id: 7, title: "Sign & Return License", status: "pending" },
      { id: 8, title: "CDM Processes License", status: "pending" },
    ];
    setSteps(initialSteps);

    // Step 1: Generate License Request
    updateStep(1, { status: "active" });
    await delay(800);
    const licenseRequest: LicenseRequest = {
      deviceId: `DEV-${generateHexKey(8).toUpperCase()}`,
      contentId: `CONTENT-${generateHexKey(4).toUpperCase()}`,
      sessionId: generateHexKey(16),
      timestamp: Date.now(),
      clientToken: generateHexKey(32),
    };
    setRequest(licenseRequest);
    updateStep(1, { status: "success", data: licenseRequest });
    await delay(500);

    // Step 2: Send Request
    updateStep(2, { status: "active" });
    await delay(600);
    updateStep(2, { status: "success", message: "Request sent via HTTPS" });
    await delay(400);

    // Step 3: Validate Device
    updateStep(3, { status: "active" });
    await delay(800);
    const deviceValid = securityLevel <= 2; // L3 might fail validation
    if (securityLevel === 3 && Math.random() > 0.7) {
      updateStep(3, {
        status: "error",
        message: "Device attestation failed - potential tampering detected",
      });
      setIsRunning(false);
      return;
    }
    updateStep(3, {
      status: "success",
      message: `Device verified: Security Level L${securityLevel}`,
    });
    await delay(400);

    // Step 4: Check Content Rights
    updateStep(4, { status: "active" });
    await delay(700);
    updateStep(4, {
      status: "success",
      message: "Content rights verified - user has valid subscription",
    });
    await delay(400);

    // Step 5: Generate Content Key
    updateStep(5, { status: "active" });
    await delay(600);
    const contentKey = generateHexKey(32);
    const keyId = generateHexKey(16);
    updateStep(5, {
      status: "success",
      data: { keyId, contentKey: `${contentKey.slice(0, 8)}...` },
    });
    await delay(400);

    // Step 6: Apply Policy
    updateStep(6, { status: "active" });
    await delay(700);
    const policy = {
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      hdcpRequired: securityLevel === 1,
      securityLevel,
      allowedOutputs:
        securityLevel === 1
          ? ["HDMI-HDCP2.2", "Internal"]
          : securityLevel === 2
          ? ["HDMI-HDCP1.4", "Internal"]
          : ["Internal"],
    };
    updateStep(6, { status: "success", data: policy });
    await delay(400);

    // Step 7: Sign License
    updateStep(7, { status: "active" });
    await delay(600);
    const signature = generateHexKey(64);
    const fullLicense: License = {
      contentKey,
      keyId,
      policy,
      signature,
    };
    setLicense(fullLicense);
    updateStep(7, { status: "success", message: "License signed with server key" });
    await delay(400);

    // Step 8: Process License
    updateStep(8, { status: "active" });
    await delay(800);
    updateStep(8, {
      status: "success",
      message: "License decrypted and stored in CDM",
    });

    setIsRunning(false);
  };

  const reset = () => {
    setSteps([]);
    setRequest(null);
    setLicense(null);
    setIsRunning(false);
  };

  return (
    <div className="space-y-6">
      {/* Security Level Selector */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm font-medium">Device Security Level:</span>
        <div className="flex gap-2">
          {[1, 2, 3].map((level) => (
            <Button
              key={level}
              variant={securityLevel === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSecurityLevel(level as 1 | 2 | 3)}
              disabled={isRunning}
              className="gap-2"
            >
              L{level}
              <Badge
                variant="secondary"
                className={`text-xs ${
                  level === 1
                    ? "bg-green-500/20 text-green-400"
                    : level === 2
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {level === 1 ? "Hardware" : level === 2 ? "Hybrid" : "Software"}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Client-Server Visualization */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Client */}
        <Card className="border-blue-500/30 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <Laptop className="h-5 w-5" />
              Client (CDM)
            </CardTitle>
            <CardDescription>
              Widevine L{securityLevel} Device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {request && (
              <>
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Device ID</p>
                  <code className="text-xs text-blue-400">{request.deviceId}</code>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Session ID</p>
                  <code className="text-xs text-blue-400 break-all">
                    {request.sessionId}
                  </code>
                </div>
              </>
            )}
            {license && (
              <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                <p className="text-xs text-muted-foreground mb-1">Content Key (Decrypted)</p>
                <code className="text-xs text-green-400 break-all">
                  {license.contentKey.slice(0, 16)}...
                </code>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Network */}
        <Card className="border-purple-500/30 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <ArrowRight className="h-5 w-5" />
              License Exchange
            </CardTitle>
            <CardDescription>HTTPS/TLS 1.3 Encrypted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {request && (
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  <span className="text-muted-foreground">License Request</span>
                </div>
              )}
              {license && (
                <div className="flex items-center gap-2 text-sm">
                  <ArrowLeft className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">License Response</span>
                </div>
              )}
              <div className="rounded-lg bg-purple-500/10 p-3 mt-4">
                <p className="text-xs text-muted-foreground">
                  All communication is encrypted. Even if intercepted, the license
                  is also encrypted with device-specific keys.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Server */}
        <Card className="border-orange-500/30 bg-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-400">
              <Server className="h-5 w-5" />
              License Server
            </CardTitle>
            <CardDescription>Widevine Cloud Service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {request && (
              <div className="rounded-lg bg-orange-500/10 p-3">
                <p className="text-xs text-muted-foreground mb-1">Content ID</p>
                <code className="text-xs text-orange-400">{request.contentId}</code>
              </div>
            )}
            {license && (
              <>
                <div className="rounded-lg bg-orange-500/10 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Key ID</p>
                  <code className="text-xs text-orange-400">{license.keyId}</code>
                </div>
                <div className="rounded-lg bg-orange-500/10 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Policy</p>
                  <div className="space-y-1 text-xs">
                    <p className="text-orange-400">
                      Expires: {new Date(license.policy.expiresAt).toLocaleString()}
                    </p>
                    <p className="text-orange-400">
                      HDCP: {license.policy.hdcpRequired ? "Required" : "Not Required"}
                    </p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Control & Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>License Acquisition Flow</span>
            <div className="flex gap-2">
              <Button onClick={runLicenseFlow} disabled={isRunning} className="gap-2">
                {isRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Request License
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
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Click &quot;Request License&quot; to simulate the license acquisition process</p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`rounded-lg border p-4 transition-all ${
                    step.status === "active"
                      ? "border-blue-500 bg-blue-500/10"
                      : step.status === "success"
                      ? "border-green-500/50 bg-green-500/5"
                      : step.status === "error"
                      ? "border-red-500/50 bg-red-500/5"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                        step.status === "active"
                          ? "bg-blue-500 text-white"
                          : step.status === "success"
                          ? "bg-green-500 text-white"
                          : step.status === "error"
                          ? "bg-red-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.status === "active" ? (
                        <RefreshCw className="h-3 w-3 animate-spin" />
                      ) : step.status === "success" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : step.status === "error" ? (
                        <XCircle className="h-4 w-4" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{step.title}</p>
                      {step.message && (
                        <p
                          className={`text-xs mt-1 ${
                            step.status === "error"
                              ? "text-red-400"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Level Info */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="flex items-start gap-3 pt-6">
          <Shield className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-500">Security Levels Explained</p>
            <div className="grid gap-3 mt-3 sm:grid-cols-3">
              <div className="rounded bg-green-500/10 p-3">
                <p className="text-sm font-medium text-green-400">L1 - Hardware</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Keys protected in TEE. Supports 4K/HDR. Required for premium content.
                </p>
              </div>
              <div className="rounded bg-yellow-500/10 p-3">
                <p className="text-sm font-medium text-yellow-400">L2 - Hybrid</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Crypto in hardware, processing in software. Less common.
                </p>
              </div>
              <div className="rounded bg-red-500/10 p-3">
                <p className="text-sm font-medium text-red-400">L3 - Software</p>
                <p className="text-xs text-muted-foreground mt-1">
                  All in software. SD only. Browsers without hardware support.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
