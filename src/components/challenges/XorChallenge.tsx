"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Eye, EyeOff, Lightbulb, Calculator } from "lucide-react";

// XOR key and flag
const XOR_KEY = 0x42; // The key is 0x42 (66 in decimal, 'B' in ASCII)
const FLAG = "DRM{x0r_1s_r3v3rs1bl3}";

// XOR encrypt the flag
function xorEncrypt(text: string, key: number): string {
  return Array.from(text)
    .map((char) => (char.charCodeAt(0) ^ key).toString(16).padStart(2, "0"))
    .join("");
}

const ENCRYPTED_FLAG = xorEncrypt(FLAG, XOR_KEY);

export function XorChallenge() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(0);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [workArea, setWorkArea] = useState("");

  const hints = [
    "XOR encryption is symmetric - the same key encrypts and decrypts.",
    "The key is a single byte value commonly used in simple obfuscation: 0x42",
    "To decrypt: for each hex pair, convert to number, XOR with 0x42, convert to ASCII.",
  ];

  const checkAnswer = useCallback(() => {
    if (userAnswer.trim() === FLAG) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  }, [userAnswer]);

  const revealNextHint = () => {
    if (showHint < hints.length) {
      setShowHint(showHint + 1);
    }
  };

  // Interactive XOR calculator
  const [calcInput, setCalcInput] = useState("");
  const [calcKey, setCalcKey] = useState("42");
  const [calcResult, setCalcResult] = useState("");

  const calculateXor = () => {
    try {
      const keyNum = parseInt(calcKey, 16);
      // Try to parse as hex pairs
      const hexPairs = calcInput.match(/.{2}/g);
      if (hexPairs) {
        const decrypted = hexPairs
          .map((hex) => String.fromCharCode(parseInt(hex, 16) ^ keyNum))
          .join("");
        setCalcResult(decrypted);
      }
    } catch {
      setCalcResult("Invalid input");
    }
  };

  return (
    <div className="space-y-6">
      {/* Challenge Data */}
      <Card className="border-blue-500/30 bg-blue-500/5">
        <CardHeader>
          <CardTitle className="text-blue-400">Encrypted Content Key</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-black/50 p-4 font-mono text-sm">
            <p className="text-muted-foreground mb-2">Encrypted (hex):</p>
            <code className="text-green-400 break-all">{ENCRYPTED_FLAG}</code>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            This content key has been XOR encrypted with a single-byte key.
            The key is commonly used in simple obfuscation schemes.
          </p>
        </CardContent>
      </Card>

      {/* Interactive XOR Calculator */}
      <Card className="border-purple-500/30 bg-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-400">
            <Calculator className="h-5 w-5" />
            XOR Calculator (Tool)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-muted-foreground">Hex Input</label>
              <input
                type="text"
                placeholder="Enter hex pairs (e.g., 44524d)"
                value={calcInput}
                onChange={(e) => setCalcInput(e.target.value.replace(/[^0-9a-fA-F]/g, ""))}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">XOR Key (hex)</label>
              <input
                type="text"
                placeholder="Key in hex (e.g., 42)"
                value={calcKey}
                onChange={(e) => setCalcKey(e.target.value.replace(/[^0-9a-fA-F]/g, ""))}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={calculateXor} size="sm">
              Decrypt
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCalcInput(ENCRYPTED_FLAG)}
            >
              Load Challenge Data
            </Button>
          </div>
          {calcResult && (
            <div className="rounded-lg bg-black/50 p-3">
              <p className="text-sm text-muted-foreground">Result:</p>
              <code className="text-green-400 font-mono">{calcResult}</code>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Hints
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={revealNextHint}
              disabled={showHint >= hints.length}
            >
              Reveal Hint ({showHint}/{hints.length})
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showHint === 0 ? (
            <p className="text-muted-foreground">Click the button to reveal hints.</p>
          ) : (
            <ul className="space-y-2">
              {hints.slice(0, showHint).map((hint, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Badge variant="secondary" className="shrink-0">
                    {index + 1}
                  </Badge>
                  <span className="text-muted-foreground">{hint}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Answer Submission */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Answer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter flag (e.g., DRM{...})"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button onClick={checkAnswer}>Submit</Button>
          </div>

          {result === "correct" && (
            <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              <span>Correct! XOR is reversible - that&apos;s why it&apos;s not secure alone.</span>
            </div>
          )}

          {result === "incorrect" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-400">
              <XCircle className="h-5 w-5" />
              <span>Incorrect. Try using the XOR calculator with key 0x42.</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Solution */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="pt-6">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? (
              <>
                <EyeOff className="h-4 w-4" />
                Hide Solution
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Show Solution (Spoiler)
              </>
            )}
          </Button>

          {showSolution && (
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-black/50 p-4 font-mono text-sm">
                <p className="text-muted-foreground mb-2">// The XOR key is 0x42 (66 decimal)</p>
                <code className="text-blue-400">const key = 0x42;</code>
                <p className="text-muted-foreground mt-4 mb-2">// For each hex pair, XOR with key</p>
                <code className="text-blue-400 block">
                  {`encrypted.match(/.{2}/g).map(hex => `}
                </code>
                <code className="text-blue-400 block ml-4">
                  {`String.fromCharCode(parseInt(hex, 16) ^ key)`}
                </code>
                <code className="text-blue-400 block">{`).join('')`}</code>
                <p className="text-green-400 mt-4">// Result: {FLAG}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                XOR encryption is symmetric - XORing twice with the same key returns the original.
                This is why single-key XOR is trivially broken once the key is known.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
