'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Lock,
  Unlock,
  Key,
  Shield,
  RefreshCw,
  Copy,
  ArrowRight,
  Binary,
  Blocks,
  Shuffle,
} from 'lucide-react';
import { generateKey, bytesToHex, hexToBytes, xorBytes } from '@/lib/drm/crypto';

type EncryptionMode = 'ctr' | 'cbc';

interface EncryptionStep {
  id: string;
  label: string;
  input: string;
  output: string;
  operation: string;
}

export default function EncryptionLabPage() {
  const [plaintext, setPlaintext] = useState('Hello, DRM World!');
  const [mode, setMode] = useState<EncryptionMode>('ctr');
  const [key, setKey] = useState<Uint8Array>(generateKey(16));
  const [iv, setIv] = useState<Uint8Array>(generateKey(16));
  const [ciphertext, setCiphertext] = useState<string>('');
  const [decrypted, setDecrypted] = useState<string>('');
  const [steps, setSteps] = useState<EncryptionStep[]>([]);
  const [showBinary, setShowBinary] = useState(false);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Simple block cipher simulation (for educational purposes)
  const blockEncrypt = (block: Uint8Array, keyBytes: Uint8Array): Uint8Array => {
    // Simplified: XOR with key (real AES is much more complex)
    return xorBytes(block, keyBytes.slice(0, block.length));
  };

  const padPKCS7 = (data: Uint8Array, blockSize: number): Uint8Array => {
    const padLength = blockSize - (data.length % blockSize);
    const padded = new Uint8Array(data.length + padLength);
    padded.set(data);
    for (let i = data.length; i < padded.length; i++) {
      padded[i] = padLength;
    }
    return padded;
  };

  const textToBytes = (text: string): Uint8Array => {
    return new TextEncoder().encode(text);
  };

  const bytesToText = (bytes: Uint8Array): string => {
    return new TextDecoder().decode(bytes);
  };

  const toBinaryString = (bytes: Uint8Array): string => {
    return Array.from(bytes).map(b => b.toString(2).padStart(8, '0')).join(' ');
  };

  const encryptCTR = async (plaintextBytes: Uint8Array): Promise<{ ciphertext: Uint8Array; steps: EncryptionStep[] }> => {
    const encSteps: EncryptionStep[] = [];
    const blockSize = 16;
    const blocks = Math.ceil(plaintextBytes.length / blockSize);
    const result = new Uint8Array(plaintextBytes.length);
    const counter = new Uint8Array(iv);

    encSteps.push({
      id: '0',
      label: 'Initialization',
      input: `Plaintext: "${bytesToText(plaintextBytes)}" (${plaintextBytes.length} bytes)`,
      output: `IV/Nonce: ${bytesToHex(iv).substring(0, 32)}...`,
      operation: 'Set up counter from IV',
    });
    await delay(400);
    setSteps([...encSteps]);

    for (let i = 0; i < blocks; i++) {
      // Increment counter
      if (i > 0) {
        for (let j = counter.length - 1; j >= 0; j--) {
          counter[j]++;
          if (counter[j] !== 0) break;
        }
      }

      // Encrypt counter to get keystream
      const keystream = blockEncrypt(counter, key);

      // XOR plaintext block with keystream
      const start = i * blockSize;
      const end = Math.min(start + blockSize, plaintextBytes.length);
      const plaintextBlock = plaintextBytes.slice(start, end);

      for (let j = 0; j < plaintextBlock.length; j++) {
        result[start + j] = plaintextBlock[j] ^ keystream[j];
      }

      encSteps.push({
        id: String(i + 1),
        label: `Block ${i + 1}`,
        input: `Counter: ${bytesToHex(counter).substring(0, 16)}... → Keystream`,
        output: `Plaintext XOR Keystream = ${bytesToHex(result.slice(start, end))}`,
        operation: `E(K, Counter${i}) ⊕ P${i}`,
      });
      await delay(300);
      setSteps([...encSteps]);
    }

    return { ciphertext: result, steps: encSteps };
  };

  const encryptCBC = async (plaintextBytes: Uint8Array): Promise<{ ciphertext: Uint8Array; steps: EncryptionStep[] }> => {
    const encSteps: EncryptionStep[] = [];
    const blockSize = 16;
    const padded = padPKCS7(plaintextBytes, blockSize);
    const blocks = padded.length / blockSize;
    const result = new Uint8Array(padded.length);
    let previousBlock: Uint8Array = new Uint8Array(iv.buffer.slice(0));

    encSteps.push({
      id: '0',
      label: 'Initialization',
      input: `Plaintext: "${bytesToText(plaintextBytes)}" → Padded to ${padded.length} bytes`,
      output: `IV: ${bytesToHex(iv).substring(0, 32)}...`,
      operation: 'PKCS#7 padding applied',
    });
    await delay(400);
    setSteps([...encSteps]);

    for (let i = 0; i < blocks; i++) {
      const start = i * blockSize;
      const plaintextBlock = padded.slice(start, start + blockSize);

      // XOR with previous ciphertext (or IV for first block)
      const xored = xorBytes(plaintextBlock, previousBlock);

      // Encrypt the XORed block
      const encrypted = blockEncrypt(xored, key);
      result.set(encrypted, start);
      previousBlock = new Uint8Array(encrypted.buffer.slice(0));

      encSteps.push({
        id: String(i + 1),
        label: `Block ${i + 1}`,
        input: `P${i} ⊕ ${i === 0 ? 'IV' : `C${i-1}`} = ${bytesToHex(xored).substring(0, 16)}...`,
        output: `C${i} = ${bytesToHex(encrypted).substring(0, 16)}...`,
        operation: `E(K, P${i} ⊕ ${i === 0 ? 'IV' : `C${i-1}`})`,
      });
      await delay(300);
      setSteps([...encSteps]);
    }

    return { ciphertext: result, steps: encSteps };
  };

  const handleEncrypt = async () => {
    setIsEncrypting(true);
    setSteps([]);
    setCiphertext('');
    setDecrypted('');

    try {
      const plaintextBytes = textToBytes(plaintext);
      const result = mode === 'ctr'
        ? await encryptCTR(plaintextBytes)
        : await encryptCBC(plaintextBytes);

      setCiphertext(bytesToHex(result.ciphertext));

      // Simulate decryption (for demo, just show original)
      await delay(500);
      setDecrypted(plaintext);
    } catch (error) {
      console.error('Encryption error:', error);
    }

    setIsEncrypting(false);
  };

  const regenerateKey = () => {
    setKey(generateKey(16));
    setCiphertext('');
    setDecrypted('');
    setSteps([]);
  };

  const regenerateIV = () => {
    setIv(generateKey(16));
    setCiphertext('');
    setDecrypted('');
    setSteps([]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Lock className="w-6 h-6 text-primary" />
          Encryption Lab
        </h1>
        <p className="text-muted-foreground mt-1">
          Explore AES encryption modes used in DRM content protection
        </p>
      </div>

      <Alert className="mb-6">
        <Shield className="h-4 w-4" />
        <AlertTitle>DRM Content Encryption</AlertTitle>
        <AlertDescription>
          DRM systems typically use AES-128 in CTR or CBC mode. CTR mode enables
          random access for streaming, while CBC provides stronger diffusion.
          This lab demonstrates the core concepts with simplified operations.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Encryption Mode</CardTitle>
              <CardDescription>Select AES operation mode</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={mode} onValueChange={(v) => setMode(v as EncryptionMode)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="ctr" className="gap-2">
                    <Binary className="w-4 h-4" />
                    CTR
                  </TabsTrigger>
                  <TabsTrigger value="cbc" className="gap-2">
                    <Blocks className="w-4 h-4" />
                    CBC
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="mt-4 p-3 rounded-lg bg-muted/50 text-sm">
                {mode === 'ctr' ? (
                  <div>
                    <p className="font-medium text-primary">Counter Mode (CTR)</p>
                    <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
                      <li>• Parallel encryption/decryption</li>
                      <li>• Random access to encrypted data</li>
                      <li>• Used in DASH/HLS streaming</li>
                      <li>• No padding required</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium text-primary">Cipher Block Chaining (CBC)</p>
                    <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
                      <li>• Each block depends on previous</li>
                      <li>• Better error propagation</li>
                      <li>• PKCS#7 padding required</li>
                      <li>• Sequential processing only</li>
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Key className="w-4 h-4" />
                Cryptographic Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm">AES-128 Key</Label>
                  <Button variant="ghost" size="sm" onClick={regenerateKey}>
                    <RefreshCw className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <code className="flex-1 text-xs bg-zinc-950 p-2 rounded overflow-hidden text-ellipsis">
                    {bytesToHex(key).substring(0, 24)}...
                  </code>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(bytesToHex(key))}>
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm">{mode === 'ctr' ? 'Nonce/Counter' : 'IV'}</Label>
                  <Button variant="ghost" size="sm" onClick={regenerateIV}>
                    <RefreshCw className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <code className="flex-1 text-xs bg-zinc-950 p-2 rounded overflow-hidden text-ellipsis">
                    {bytesToHex(iv).substring(0, 24)}...
                  </code>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(bytesToHex(iv))}>
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <Label className="text-sm">Show Binary</Label>
                <Switch checked={showBinary} onCheckedChange={setShowBinary} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter plaintext..."
                value={plaintext}
                onChange={(e) => setPlaintext(e.target.value)}
                className="font-mono text-sm"
                rows={3}
              />
              <Button
                onClick={handleEncrypt}
                disabled={isEncrypting || !plaintext}
                className="w-full gap-2"
              >
                {isEncrypting ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                {isEncrypting ? 'Encrypting...' : 'Encrypt'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Visualization Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shuffle className="w-5 h-5" />
              {mode === 'ctr' ? 'CTR Mode' : 'CBC Mode'} Encryption Process
            </CardTitle>
            <CardDescription>
              Step-by-step visualization of the encryption process
            </CardDescription>
          </CardHeader>
          <CardContent>
            {steps.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Lock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Enter plaintext and click Encrypt to see the process</p>
              </div>
            ) : (
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {/* Mode Diagram */}
                  <div className="p-4 rounded-lg border bg-zinc-950">
                    <div className="text-xs text-muted-foreground mb-2">
                      {mode === 'ctr' ? 'CTR Mode Structure' : 'CBC Mode Structure'}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-mono">
                      {mode === 'ctr' ? (
                        <>
                          <Badge variant="outline">Counter</Badge>
                          <ArrowRight className="w-4 h-4" />
                          <Badge variant="secondary">E(K)</Badge>
                          <ArrowRight className="w-4 h-4" />
                          <Badge variant="outline">Keystream</Badge>
                          <span className="text-primary">⊕</span>
                          <Badge variant="outline">Plaintext</Badge>
                          <ArrowRight className="w-4 h-4" />
                          <Badge className="bg-primary">Ciphertext</Badge>
                        </>
                      ) : (
                        <>
                          <Badge variant="outline">Plaintext</Badge>
                          <span className="text-primary">⊕</span>
                          <Badge variant="outline">IV/Prev</Badge>
                          <ArrowRight className="w-4 h-4" />
                          <Badge variant="secondary">E(K)</Badge>
                          <ArrowRight className="w-4 h-4" />
                          <Badge className="bg-primary">Ciphertext</Badge>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Steps */}
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="p-4 rounded-lg border bg-muted/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{step.label}</Badge>
                        <span className="text-xs text-muted-foreground font-mono">
                          {step.operation}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Input: </span>
                          <code className="text-xs bg-background px-2 py-1 rounded">
                            {step.input}
                          </code>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Output: </span>
                          <code className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {step.output}
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Results */}
                  {ciphertext && (
                    <div className="p-4 rounded-lg border border-primary/50 bg-primary/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="w-4 h-4 text-primary" />
                        <span className="font-medium">Encryption Complete</span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Ciphertext (hex)</Label>
                          <div className="flex gap-2 mt-1">
                            <code className="flex-1 text-xs bg-zinc-950 p-2 rounded break-all">
                              {ciphertext}
                            </code>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(ciphertext)}>
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        {showBinary && (
                          <div>
                            <Label className="text-xs text-muted-foreground">Ciphertext (binary)</Label>
                            <code className="block text-xs bg-zinc-950 p-2 rounded break-all mt-1">
                              {toBinaryString(hexToBytes(ciphertext))}
                            </code>
                          </div>
                        )}

                        {decrypted && (
                          <div className="pt-2 border-t">
                            <div className="flex items-center gap-2 mb-1">
                              <Unlock className="w-4 h-4 text-green-500" />
                              <Label className="text-xs text-green-400">Decrypted</Label>
                            </div>
                            <code className="block text-sm bg-green-500/10 text-green-400 p-2 rounded">
                              {decrypted}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Educational Footer */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">DRM Encryption in Practice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">Widevine</h4>
              <p className="text-muted-foreground text-xs">
                Uses AES-128 CTR for video encryption. Each segment has a unique IV derived from
                segment number, enabling efficient seeking in encrypted streams.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">FairPlay</h4>
              <p className="text-muted-foreground text-xs">
                Apple&apos;s system uses AES-128 CBC for HLS content. Keys are rotated periodically
                and delivered via secure session with the device.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">PlayReady</h4>
              <p className="text-muted-foreground text-xs">
                Microsoft&apos;s DRM supports both CTR and CBC modes. Often uses AES-128 CTR
                for DASH streams with per-sample encryption.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
