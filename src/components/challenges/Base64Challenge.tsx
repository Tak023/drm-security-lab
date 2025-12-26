"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Eye, EyeOff, Lightbulb } from "lucide-react";

// The flag is hidden in a base64 encoded "license response"
const FLAG = "DRM{b4s364_1s_n0t_encrypt10n}";
const LICENSE_DATA = {
  version: 1,
  keyId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  contentKey: btoa(FLAG), // Base64 encode the flag
  policy: {
    expiresAt: Date.now() + 86400000,
    hdcpRequired: true,
  },
};

const ENCODED_LICENSE = btoa(JSON.stringify(LICENSE_DATA));

export function Base64Challenge() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(0);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const hints = [
    "The license response is Base64 encoded. Try decoding it first.",
    "After decoding, you'll find JSON data. Look for the 'contentKey' field.",
    "The contentKey is also Base64 encoded. Decode it again to find the flag.",
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

  return (
    <div className="space-y-6">
      {/* Challenge Data */}
      <Card className="border-blue-500/30 bg-blue-500/5">
        <CardHeader>
          <CardTitle className="text-blue-400">Intercepted License Response</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-black/50 p-4 font-mono text-sm break-all">
            <code className="text-green-400">{ENCODED_LICENSE}</code>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            This Base64-encoded data was captured from a license server response.
            Decode it to find the hidden flag.
          </p>
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
              <span>Correct! You&apos;ve solved the challenge.</span>
            </div>
          )}

          {result === "incorrect" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-400">
              <XCircle className="h-5 w-5" />
              <span>Incorrect. Try again or use a hint.</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Solution Toggle (for learning) */}
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
                <p className="text-muted-foreground mb-2">// Step 1: Decode the outer Base64</p>
                <code className="text-blue-400">
                  const decoded = atob(&quot;{ENCODED_LICENSE.slice(0, 30)}...&quot;);
                </code>
                <p className="text-muted-foreground mt-4 mb-2">// Step 2: Parse the JSON</p>
                <code className="text-blue-400">
                  const license = JSON.parse(decoded);
                </code>
                <p className="text-muted-foreground mt-4 mb-2">// Step 3: Decode the contentKey</p>
                <code className="text-blue-400">
                  const flag = atob(license.contentKey);
                </code>
                <p className="text-green-400 mt-4">// Result: {FLAG}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
