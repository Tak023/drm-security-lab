"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Unlock,
  Key,
  RefreshCw,
  ArrowRight,
  FileText,
  Binary,
  Shield,
} from "lucide-react";
import { generateHexKey, simpleBlockEncrypt, simpleBlockDecrypt } from "@/lib/crypto";

type EncryptionMode = "ctr" | "cbc";

export function EncryptionLab() {
  const [mode, setMode] = useState<EncryptionMode>("ctr");
  const [plaintext, setPlaintext] = useState("Hello, this is protected DRM content!");
  const [key, setKey] = useState(generateHexKey(16));
  const [iv, setIv] = useState(generateHexKey(16));
  const [ciphertext, setCiphertext] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const encrypt = async () => {
    setIsEncrypting(true);
    setShowSteps(true);
    await new Promise((r) => setTimeout(r, 500));

    // Convert key to number for our simple demo
    const keyNum = parseInt(key.slice(0, 8), 16);
    const encrypted = simpleBlockEncrypt(plaintext, keyNum);
    setCiphertext(encrypted);
    setDecrypted("");
    setIsEncrypting(false);
  };

  const decrypt = async () => {
    if (!ciphertext) return;
    setIsDecrypting(true);
    await new Promise((r) => setTimeout(r, 500));

    const keyNum = parseInt(key.slice(0, 8), 16);
    const decryptedText = simpleBlockDecrypt(ciphertext, keyNum);
    setDecrypted(decryptedText);
    setIsDecrypting(false);
  };

  const generateNewKey = () => {
    setKey(generateHexKey(16));
    setCiphertext("");
    setDecrypted("");
    setShowSteps(false);
  };

  const generateNewIV = () => {
    setIv(generateHexKey(16));
    setCiphertext("");
    setDecrypted("");
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Encryption Mode:</span>
        <div className="flex gap-2">
          <Button
            variant={mode === "ctr" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("ctr")}
          >
            AES-CTR
            <Badge variant="secondary" className="ml-2 text-xs">
              Streaming
            </Badge>
          </Button>
          <Button
            variant={mode === "cbc" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("cbc")}
          >
            AES-CBC
            <Badge variant="secondary" className="ml-2 text-xs">
              Block
            </Badge>
          </Button>
        </div>
      </div>

      {/* Key and IV Display */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-base">
              <span className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                Content Key (128-bit)
              </span>
              <Button variant="ghost" size="sm" onClick={generateNewKey}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <code className="block rounded bg-muted px-3 py-2 text-sm font-mono text-green-400 break-all">
              {key}
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              This key is delivered securely via the license server
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-base">
              <span className="flex items-center gap-2">
                <Binary className="h-4 w-4" />
                Initialization Vector (IV)
              </span>
              <Button variant="ghost" size="sm" onClick={generateNewIV}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <code className="block rounded bg-muted px-3 py-2 text-sm font-mono text-blue-400 break-all">
              {iv}
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              {mode === "ctr"
                ? "Counter starting value, increments for each block"
                : "Random value, XORed with first plaintext block"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Encryption Flow */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Plaintext Input */}
        <Card className="border-blue-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base text-blue-400">
              <FileText className="h-4 w-4" />
              Plaintext (Input)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={plaintext}
              onChange={(e) => {
                setPlaintext(e.target.value);
                setCiphertext("");
                setDecrypted("");
                setShowSteps(false);
              }}
              className="w-full h-32 rounded-md border border-input bg-background px-3 py-2 text-sm font-mono resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Enter text to encrypt..."
            />
            <Button
              onClick={encrypt}
              disabled={isEncrypting || !plaintext}
              className="w-full mt-3 gap-2"
            >
              {isEncrypting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Encrypting...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Encrypt
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Process Arrow */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <ArrowRight className="h-8 w-8 text-muted-foreground hidden lg:block" />
            <div className="text-center">
              <Badge variant="outline" className="mb-2">
                {mode.toUpperCase()}
              </Badge>
              <p className="text-xs text-muted-foreground">
                {mode === "ctr"
                  ? "XOR with encrypted counter"
                  : "Chain block cipher"}
              </p>
            </div>
            <ArrowRight className="h-8 w-8 text-muted-foreground hidden lg:block" />
          </div>
        </div>

        {/* Ciphertext Output */}
        <Card className="border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base text-purple-400">
              <Lock className="h-4 w-4" />
              Ciphertext (Output)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-md border border-input bg-muted/50 px-3 py-2 text-sm font-mono overflow-auto">
              {ciphertext ? (
                <span className="text-purple-400 break-all">{ciphertext}</span>
              ) : (
                <span className="text-muted-foreground">
                  Encrypted data will appear here...
                </span>
              )}
            </div>
            <Button
              onClick={decrypt}
              disabled={isDecrypting || !ciphertext}
              variant="outline"
              className="w-full mt-3 gap-2"
            >
              {isDecrypting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Decrypting...
                </>
              ) : (
                <>
                  <Unlock className="h-4 w-4" />
                  Decrypt
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Decrypted Result */}
      {decrypted && (
        <Card className="border-green-500/30 bg-green-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base text-green-400">
              <Unlock className="h-4 w-4" />
              Decrypted Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md bg-green-500/10 px-4 py-3 font-mono text-sm text-green-400">
              {decrypted}
            </div>
            {decrypted === plaintext ? (
              <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Decryption successful - original content recovered!
              </p>
            ) : (
              <p className="text-xs text-yellow-500 mt-2">
                Note: Minor differences may occur due to simplified demo encryption
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* How It Works */}
      {showSteps && (
        <Card>
          <CardHeader>
            <CardTitle>How {mode.toUpperCase()} Mode Works</CardTitle>
          </CardHeader>
          <CardContent>
            {mode === "ctr" ? (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <Binary className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                    <p className="text-xs font-medium">1. Initialize Counter</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Start with IV value
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <Lock className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                    <p className="text-xs font-medium">2. Encrypt Counter</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      AES(key, counter)
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <ArrowRight className="h-6 w-6 mx-auto mb-2 text-green-400" />
                    <p className="text-xs font-medium">3. XOR with Plaintext</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Creates ciphertext
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <RefreshCw className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                    <p className="text-xs font-medium">4. Increment & Repeat</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      For each block
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  CTR mode turns AES into a stream cipher, allowing parallel encryption
                  and random access - perfect for video streaming in DRM systems.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <Binary className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                    <p className="text-xs font-medium">1. XOR with IV/Previous</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Chain blocks together
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <Lock className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                    <p className="text-xs font-medium">2. Encrypt Block</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      AES(key, block)
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <ArrowRight className="h-6 w-6 mx-auto mb-2 text-green-400" />
                    <p className="text-xs font-medium">3. Output Ciphertext</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Encrypted block
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <RefreshCw className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                    <p className="text-xs font-medium">4. Chain & Repeat</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Use output as next IV
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  CBC mode chains blocks together, providing better diffusion but
                  requiring sequential processing - less common in modern streaming.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* CENC Info */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="flex items-start gap-3 pt-6">
          <Shield className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-500">CENC (Common Encryption)</p>
            <p className="text-sm text-muted-foreground mt-1">
              Real DRM systems use CENC which standardizes encryption across Widevine,
              FairPlay, and PlayReady. Content is encrypted once and can be decrypted
              by any compatible DRM system. CENC typically uses AES-CTR with 128-bit keys.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
