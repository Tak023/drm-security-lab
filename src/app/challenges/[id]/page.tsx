"use client";

import Link from "next/link";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, Flag, Lightbulb } from "lucide-react";
import { Base64Challenge } from "@/components/challenges/Base64Challenge";
import { XorChallenge } from "@/components/challenges/XorChallenge";

const challenges: Record<string, {
  title: string;
  points: number;
  difficulty: string;
  category: string;
  description: string;
  hints: string[];
  resources: string[];
  hasInteractive?: boolean;
}> = {
  "base64-decode": {
    title: "Base64 License",
    points: 50,
    difficulty: "Easy",
    category: "Basics",
    description: "A license response has been intercepted. It's Base64 encoded and contains the content key. Decode it to find the hidden flag.",
    hints: [
      "Base64 is an encoding, not encryption",
      "Use atob() in JavaScript or base64.b64decode() in Python",
      "The decoded data is JSON - look for the content key",
    ],
    resources: [
      "Base64 encoding explained",
      "Online Base64 decoder tools",
    ],
    hasInteractive: true,
  },
  "hex-analysis": {
    title: "Hex Key Inspector",
    points: 75,
    difficulty: "Easy",
    category: "Basics",
    description: "Analyze a hex-encoded content key. Convert it to ASCII to find the embedded message.",
    hints: [
      "Each pair of hex characters represents one byte",
      "Convert hex to decimal, then to ASCII character",
      "The flag format is DRM{...}",
    ],
    resources: [
      "Hex to ASCII conversion",
      "Understanding hexadecimal",
    ],
  },
  "license-parser": {
    title: "License Parser",
    points: 100,
    difficulty: "Easy",
    category: "Cryptography",
    description: "You've intercepted a Widevine license response. Parse and decode it to find the hidden flag. The license is base64 encoded and contains protobuf data.",
    hints: [
      "Widevine licenses use Protocol Buffers format",
      "Look for the content key in the license",
      "The flag is hidden in the key ID field",
    ],
    resources: [
      "Widevine License Protocol documentation",
      "Protocol Buffers decoder",
    ],
  },
  "xor-encryption": {
    title: "XOR Decryption",
    points: 100,
    difficulty: "Easy",
    category: "Cryptography",
    description: "A content key has been XOR encrypted with a single-byte key. The key value is a common hex number. Recover the original key to find the flag.",
    hints: [
      "XOR encryption is reversible with the same key",
      "Common XOR keys include 0x00, 0x42, 0xFF",
      "Try different keys until you see readable text",
    ],
    resources: [
      "XOR cipher explained",
      "Single-byte XOR cracking",
    ],
    hasInteractive: true,
  },
  "key-derivation": {
    title: "Key Derivation",
    points: 200,
    difficulty: "Medium",
    category: "Cryptography",
    description: "Given a license server's response, derive the content key using the correct key derivation function. The server uses a custom KDF based on HKDF.",
    hints: [
      "The KDF uses SHA-256 as the hash function",
      "The salt is derived from the session ID",
      "Check the info parameter for the key type",
    ],
    resources: [
      "RFC 5869 - HKDF specification",
      "Key derivation in DRM systems",
    ],
  },
  "aes-decrypt": {
    title: "AES Content Key",
    points: 250,
    difficulty: "Medium",
    category: "Cryptography",
    description: "An encrypted content key has been captured along with its IV. Decrypt it using AES-CTR to recover the flag.",
    hints: [
      "AES-CTR uses a counter mode - no padding needed",
      "The IV (Initialization Vector) is provided",
      "Make sure you're using the correct key size (128-bit)",
    ],
    resources: [
      "AES-CTR mode explained",
      "Crypto libraries documentation",
    ],
  },
  "pssh-parser": {
    title: "PSSH Box Analysis",
    points: 200,
    difficulty: "Medium",
    category: "Forensics",
    description: "Parse a PSSH box from an MP4 initialization segment. Extract the System ID and Key IDs to find the flag.",
    hints: [
      "PSSH boxes start with 'pssh' ASCII bytes",
      "The System ID is a UUID identifying the DRM",
      "Key IDs follow the system-specific data",
    ],
    resources: [
      "PSSH box structure",
      "CENC standard documentation",
    ],
  },
  "certificate-analysis": {
    title: "Certificate Analysis",
    points: 300,
    difficulty: "Medium",
    category: "Analysis",
    description: "Analyze a chain of DRM certificates to identify a vulnerability. One of the certificates in the chain has a weakness that could be exploited.",
    hints: [
      "Check certificate validity periods",
      "Look for weak signature algorithms",
      "Examine the key usage extensions",
    ],
    resources: [
      "X.509 certificate format",
      "Certificate chain validation",
    ],
  },
  "license-policy": {
    title: "Policy Bypass",
    points: 275,
    difficulty: "Medium",
    category: "Analysis",
    description: "A license response contains policy restrictions. Analyze the policy structure to find a logical flaw that allows bypassing time restrictions.",
    hints: [
      "License policies often use Unix timestamps",
      "Check for signed vs unsigned integer issues",
      "What happens with negative or zero values?",
    ],
    resources: [
      "DRM license policies",
      "Time-based access control",
    ],
  },
  "watermark-extraction": {
    title: "Watermark Extraction",
    points: 350,
    difficulty: "Medium",
    category: "Forensics",
    description: "A video sample contains a forensic watermark that identifies the source. Extract the watermark to find the flag.",
    hints: [
      "The watermark is in the luminance channel",
      "Look for patterns in specific frames",
      "The watermark uses A/B segment switching",
    ],
    resources: [
      "Forensic watermarking techniques",
      "Video frame analysis",
    ],
  },
  "protocol-replay": {
    title: "Protocol Replay",
    points: 400,
    difficulty: "Hard",
    category: "Protocol",
    description: "A license acquisition protocol has a vulnerability that allows replay attacks. Identify the missing protection and craft a replay attack.",
    hints: [
      "Look for missing nonce or timestamp",
      "Check if requests are properly signed",
      "The session ID might be reusable",
    ],
    resources: [
      "Replay attack prevention",
      "License protocol security",
    ],
  },
  "mitm-detection": {
    title: "MITM Resistance",
    points: 400,
    difficulty: "Hard",
    category: "Protocol",
    description: "Analyze a license acquisition protocol for man-in-the-middle vulnerabilities. Find what protection is missing.",
    hints: [
      "Check for certificate pinning",
      "Look at how the license response is verified",
      "Is the server's identity properly validated?",
    ],
    resources: [
      "MITM attack prevention",
      "TLS certificate validation",
    ],
  },
  "session-hijack": {
    title: "Session Takeover",
    points: 450,
    difficulty: "Hard",
    category: "Protocol",
    description: "A CDM session token has been captured from network traffic. Use it to request a license from the server.",
    hints: [
      "Session tokens often have limited lifetime",
      "Check if the token is bound to specific content",
      "Some sessions allow multiple license requests",
    ],
    resources: [
      "Session management security",
      "Token-based authentication",
    ],
  },
  "cdm-emulation": {
    title: "CDM Emulation",
    points: 500,
    difficulty: "Hard",
    category: "Implementation",
    description: "Build a minimal CDM emulator that can process a license and decrypt a sample encrypted segment. Use the provided test keys and content.",
    hints: [
      "Start with the license parsing",
      "Use AES-CTR for decryption",
      "The IV is derived from the sample number",
    ],
    resources: [
      "CENC encryption specification",
      "AES-CTR mode of operation",
    ],
  },
  "key-rotation": {
    title: "Key Rotation Attack",
    points: 450,
    difficulty: "Hard",
    category: "Implementation",
    description: "Content uses key rotation with predictable key IDs. Find the pattern to predict the next key and decrypt additional content.",
    hints: [
      "Key IDs are generated using a pattern",
      "Look for sequential or time-based values",
      "The pattern might use a hash function",
    ],
    resources: [
      "Key rotation in DRM",
      "Predictable random number generators",
    ],
  },
  "device-attestation": {
    title: "Attestation Bypass",
    points: 600,
    difficulty: "Expert",
    category: "Advanced",
    description: "The license server requires device attestation. Analyze the attestation protocol and find a way to spoof a valid attestation response.",
    hints: [
      "Attestation often relies on certificate chains",
      "Check for revocation list validation",
      "Some implementations trust cached attestations",
    ],
    resources: [
      "Device attestation mechanisms",
      "TEE attestation protocols",
    ],
  },
};

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/10 text-green-500";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-500";
    case "Hard":
      return "bg-red-500/10 text-red-500";
    case "Expert":
      return "bg-purple-500/10 text-purple-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
}

// Map of challenge IDs to their interactive components
const challengeComponents: Record<string, React.ComponentType> = {
  "base64-decode": Base64Challenge,
  "xor-encryption": XorChallenge,
};

export default function ChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const challenge = challenges[id];
  const ChallengeComponent = challengeComponents[id];

  if (!challenge) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-bold">Challenge Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The challenge you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/challenges">
            <Button className="mt-4">Back to Challenges</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/challenges">
          <Button variant="ghost" size="sm" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Challenges
          </Button>
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{challenge.category}</Badge>
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">{challenge.points} pts</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{challenge.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{challenge.description}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Hints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {challenge.hints.map((hint, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{hint}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {challenge.resources.map((resource, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{resource}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Challenge Component */}
        {ChallengeComponent ? (
          <ChallengeComponent />
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5" />
                  Submit Flag
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter flag (e.g., DRM{...})"
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <Button>Submit</Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  This challenge requires external tools. Use the hints and resources above to solve it.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
