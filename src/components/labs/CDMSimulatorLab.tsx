"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Key,
  Lock,
  Unlock,
  Server,
  FileVideo,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Play,
  Pause,
  Database,
  Cpu,
} from "lucide-react";
import { generateHexKey } from "@/lib/crypto";

type CDMState = "idle" | "initializing" | "requesting" | "processing" | "decrypting" | "playing" | "error";

interface CDMSession {
  sessionId: string;
  contentId: string;
  keyId: string | null;
  contentKey: string | null;
  state: CDMState;
  securityLevel: 1 | 2 | 3;
}

interface EncryptedContent {
  id: string;
  name: string;
  encryptedData: string;
  psshBox: string;
  keyId: string;
}

export function CDMSimulatorLab() {
  const [session, setSession] = useState<CDMSession | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [decryptedContent, setDecryptedContent] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<1 | 2 | 3>(1);

  const sampleContent: EncryptedContent = {
    id: "CONTENT-001",
    name: "Sample Protected Video",
    encryptedData: generateHexKey(64),
    psshBox: `0000003470737368${generateHexKey(32)}`,
    keyId: generateHexKey(16),
  };

  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, `[${timestamp}] ${message}`]);
  }, []);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const initializeCDM = async () => {
    setLogs([]);
    setDecryptedContent(null);
    setIsPlaying(false);

    addLog("Initializing Content Decryption Module...");
    await delay(500);

    const newSession: CDMSession = {
      sessionId: generateHexKey(16),
      contentId: sampleContent.id,
      keyId: null,
      contentKey: null,
      state: "initializing",
      securityLevel,
    };

    setSession(newSession);
    addLog(`CDM initialized with Security Level L${securityLevel}`);
    addLog(`Session ID: ${newSession.sessionId}`);
    await delay(300);

    // Parse PSSH box
    addLog("Parsing PSSH box from content...");
    await delay(400);
    addLog(`Found Key ID: ${sampleContent.keyId}`);

    setSession((prev) => prev ? { ...prev, keyId: sampleContent.keyId, state: "requesting" } : null);
  };

  const requestLicense = async () => {
    if (!session) return;

    addLog("Generating license request challenge...");
    await delay(600);

    const challenge = {
      sessionId: session.sessionId,
      keyId: sampleContent.keyId,
      deviceCert: generateHexKey(32),
      nonce: generateHexKey(8),
    };

    addLog(`Challenge generated: ${JSON.stringify(challenge).slice(0, 60)}...`);
    await delay(400);

    addLog("Sending license request to server...");
    await delay(800);

    // Simulate server validation
    if (securityLevel === 3 && Math.random() > 0.7) {
      addLog("ERROR: Server rejected request - device attestation failed");
      setSession((prev) => prev ? { ...prev, state: "error" } : null);
      return;
    }

    addLog("Server validated device certificate");
    addLog("Server checked content rights - user authorized");
    await delay(500);

    const contentKey = generateHexKey(32);
    addLog(`Received encrypted license response`);
    await delay(400);

    addLog("Decrypting license with device private key...");
    await delay(500);

    setSession((prev) =>
      prev ? { ...prev, contentKey, state: "processing" } : null
    );
    addLog(`Content key extracted: ${contentKey.slice(0, 16)}...`);
  };

  const decryptContent = async () => {
    if (!session || !session.contentKey) return;

    setSession((prev) => prev ? { ...prev, state: "decrypting" } : null);
    addLog("Beginning content decryption...");
    await delay(400);

    addLog("Loading encrypted media segments...");
    await delay(500);

    addLog("Applying AES-CTR decryption with content key...");
    await delay(600);

    // Simulate decryption
    const decrypted = `DECRYPTED_CONTENT_${generateHexKey(8)}`;
    setDecryptedContent(decrypted);

    addLog("Content successfully decrypted");
    addLog("Passing to secure video pipeline...");
    await delay(400);

    setSession((prev) => prev ? { ...prev, state: "playing" } : null);
    addLog("Playback ready - content protected by HDCP");
  };

  const runFullFlow = async () => {
    await initializeCDM();
    await delay(500);
    await requestLicense();
    await delay(500);
    if (session?.state !== "error") {
      await decryptContent();
    }
  };

  const togglePlayback = () => {
    if (session?.state === "playing") {
      setIsPlaying((prev) => !prev);
      addLog(isPlaying ? "Playback paused" : "Playback resumed");
    }
  };

  const reset = () => {
    setSession(null);
    setLogs([]);
    setDecryptedContent(null);
    setIsPlaying(false);
  };

  const getStateColor = (state: CDMState) => {
    switch (state) {
      case "idle":
        return "bg-gray-500/20 text-gray-400";
      case "initializing":
        return "bg-blue-500/20 text-blue-400";
      case "requesting":
        return "bg-purple-500/20 text-purple-400";
      case "processing":
        return "bg-yellow-500/20 text-yellow-400";
      case "decrypting":
        return "bg-orange-500/20 text-orange-400";
      case "playing":
        return "bg-green-500/20 text-green-400";
      case "error":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Level Selector */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm font-medium">Simulated Security Level:</span>
        <div className="flex gap-2">
          {[1, 2, 3].map((level) => (
            <Button
              key={level}
              variant={securityLevel === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSecurityLevel(level as 1 | 2 | 3)}
              disabled={session !== null}
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
                {level === 1 ? "TEE" : level === 2 ? "Hybrid" : "Software"}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* CDM Architecture Visualization */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* CDM State */}
        <Card className="border-blue-500/30 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <Shield className="h-5 w-5" />
              CDM State
            </CardTitle>
            <CardDescription>Content Decryption Module Status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className={getStateColor(session?.state || "idle")}>
                {session?.state || "idle"}
              </Badge>
            </div>

            {session && (
              <>
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Session ID</p>
                  <code className="text-xs text-blue-400">{session.sessionId}</code>
                </div>

                {session.keyId && (
                  <div className="rounded-lg bg-blue-500/10 p-3">
                    <p className="text-xs text-muted-foreground mb-1">Key ID</p>
                    <code className="text-xs text-blue-400">{session.keyId}</code>
                  </div>
                )}

                {session.contentKey && (
                  <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                    <p className="text-xs text-muted-foreground mb-1">Content Key (Secure Storage)</p>
                    <code className="text-xs text-green-400">
                      {session.contentKey.slice(0, 16)}... (protected)
                    </code>
                  </div>
                )}
              </>
            )}

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Cpu className="h-4 w-4" />
                <span className="text-muted-foreground">
                  {securityLevel === 1
                    ? "Trusted Execution Environment"
                    : securityLevel === 2
                    ? "Hardware Crypto Engine"
                    : "Software Implementation"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Database className="h-4 w-4" />
                <span className="text-muted-foreground">
                  {securityLevel === 1
                    ? "Secure key storage in TEE"
                    : securityLevel === 2
                    ? "Protected memory region"
                    : "Obfuscated software storage"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content & Playback */}
        <Card className="border-purple-500/30 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <FileVideo className="h-5 w-5" />
              Protected Content
            </CardTitle>
            <CardDescription>{sampleContent.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-purple-500/10 p-3">
              <p className="text-xs text-muted-foreground mb-1">Content ID</p>
              <code className="text-xs text-purple-400">{sampleContent.id}</code>
            </div>

            <div className="rounded-lg bg-purple-500/10 p-3">
              <p className="text-xs text-muted-foreground mb-1">PSSH Box</p>
              <code className="text-xs text-purple-400 break-all">
                {sampleContent.psshBox.slice(0, 32)}...
              </code>
            </div>

            {decryptedContent && (
              <div className="rounded-lg bg-green-500/10 p-4 border border-green-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-400">
                    Content Decrypted
                  </span>
                  {session?.state === "playing" && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={togglePlayback}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
                <div className="h-24 rounded bg-black/50 flex items-center justify-center">
                  {isPlaying ? (
                    <div className="flex items-center gap-2 text-green-400">
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Playing protected content...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Lock className="h-4 w-4" />
                      <span className="text-sm">Ready to play</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>CDM Workflow</span>
            <div className="flex gap-2">
              <Button
                onClick={runFullFlow}
                disabled={session !== null}
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                Run Full Flow
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Step-by-step controls */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              size="sm"
              variant="outline"
              onClick={initializeCDM}
              disabled={session !== null}
              className="gap-2"
            >
              <Shield className="h-4 w-4" />
              1. Initialize CDM
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={requestLicense}
              disabled={!session || session.state !== "requesting"}
              className="gap-2"
            >
              <Key className="h-4 w-4" />
              2. Request License
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={decryptContent}
              disabled={!session || session.state !== "processing"}
              className="gap-2"
            >
              <Unlock className="h-4 w-4" />
              3. Decrypt Content
            </Button>
          </div>

          {/* Logs */}
          <div className="rounded-lg bg-black/50 p-4 h-64 overflow-auto font-mono text-xs">
            {logs.length === 0 ? (
              <p className="text-muted-foreground">
                CDM logs will appear here...
              </p>
            ) : (
              logs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    log.includes("ERROR")
                      ? "text-red-400"
                      : log.includes("SUCCESS") || log.includes("successfully")
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* CDM Components Info */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="flex items-start gap-3 pt-6">
          <Cpu className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div className="w-full">
            <p className="font-medium text-yellow-500">CDM Components</p>
            <div className="grid gap-3 mt-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded bg-blue-500/10 p-3">
                <p className="text-sm font-medium text-blue-400">Key System</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Handles license requests and key management
                </p>
              </div>
              <div className="rounded bg-purple-500/10 p-3">
                <p className="text-sm font-medium text-purple-400">Decryptor</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Performs AES decryption of media segments
                </p>
              </div>
              <div className="rounded bg-green-500/10 p-3">
                <p className="text-sm font-medium text-green-400">Secure Storage</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Protects keys and sensitive data
                </p>
              </div>
              <div className="rounded bg-orange-500/10 p-3">
                <p className="text-sm font-medium text-orange-400">Output Control</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Enforces HDCP and output restrictions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
