"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info, AlertTriangle } from "lucide-react";
import { KeyExchangeLab } from "@/components/labs/KeyExchangeLab";
import { EncryptionLab } from "@/components/labs/EncryptionLab";
import { LicenseServerLab } from "@/components/labs/LicenseServerLab";
import { CDMSimulatorLab } from "@/components/labs/CDMSimulatorLab";
import { use } from "react";

const labs: Record<string, {
  title: string;
  difficulty: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  warning?: string;
}> = {
  "license-server": {
    title: "License Server Lab",
    difficulty: "Beginner",
    description: "Learn how DRM license servers work by interacting with a simulated license server. You'll understand the license request/response flow and how content keys are delivered.",
    objectives: [
      "Understand the license request format",
      "Learn how license servers validate requests",
      "See how content keys are encrypted and delivered",
      "Explore license policies and restrictions",
    ],
    prerequisites: [
      "Basic understanding of HTTP requests",
      "Familiarity with JSON data format",
    ],
  },
  "key-exchange": {
    title: "Key Exchange Lab",
    difficulty: "Intermediate",
    description: "Explore the cryptographic key exchange process used in DRM systems. Learn how devices and servers establish secure communication.",
    objectives: [
      "Understand public key cryptography basics",
      "Learn the Diffie-Hellman key exchange",
      "See how session keys are derived",
      "Explore key wrapping techniques",
    ],
    prerequisites: [
      "Basic cryptography knowledge",
      "Understanding of public/private keys",
    ],
  },
  encryption: {
    title: "Encryption Lab",
    difficulty: "Intermediate",
    description: "Get hands-on experience with AES encryption used in DRM. Encrypt and decrypt sample content to understand the process.",
    objectives: [
      "Implement AES-CTR encryption",
      "Understand initialization vectors (IV)",
      "Learn about subsample encryption",
      "Practice with CENC encryption schemes",
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of binary data",
    ],
  },
  "cdm-simulator": {
    title: "CDM Simulator",
    difficulty: "Advanced",
    description: "Simulate a Content Decryption Module to understand the complete DRM client workflow from license acquisition to content decryption.",
    objectives: [
      "Build a minimal CDM implementation",
      "Handle license requests and responses",
      "Implement key derivation",
      "Decrypt protected content samples",
    ],
    prerequisites: [
      "Strong programming skills",
      "Cryptography fundamentals",
      "Understanding of DRM concepts",
    ],
  },
  "attacks/cdm-extraction": {
    title: "CDM Extraction Analysis",
    difficulty: "Advanced",
    description: "Learn how attackers attempt to extract CDM keys from devices and understand the security measures that prevent this.",
    objectives: [
      "Understand TEE security boundaries",
      "Learn about memory protection",
      "Analyze extraction techniques",
      "Study countermeasures",
    ],
    prerequisites: [
      "Reverse engineering basics",
      "Understanding of L1/L3 security levels",
    ],
    warning: "This lab is for educational purposes only. Do not attempt these techniques on production systems.",
  },
  "attacks/key-sharing": {
    title: "Key Sharing Analysis",
    difficulty: "Intermediate",
    description: "Understand the key sharing attack vector where content keys are shared between users to bypass DRM protection.",
    objectives: [
      "Understand how keys can be extracted",
      "Learn about key sharing networks",
      "Study detection mechanisms",
      "Explore watermarking as a countermeasure",
    ],
    prerequisites: [
      "Understanding of license acquisition",
      "Basic DRM knowledge",
    ],
    warning: "This lab demonstrates vulnerabilities for defensive purposes.",
  },
  "attacks/mitm": {
    title: "MITM Attack Lab",
    difficulty: "Advanced",
    description: "Explore man-in-the-middle attack scenarios on DRM license acquisition and learn how to prevent them.",
    objectives: [
      "Set up a proxy for license traffic",
      "Analyze license request/response",
      "Understand TLS pinning",
      "Learn about request signing",
    ],
    prerequisites: [
      "Network security fundamentals",
      "HTTP/HTTPS understanding",
    ],
    warning: "Only perform these techniques in controlled lab environments.",
  },
  "attacks/hdcp-bypass": {
    title: "HDCP Analysis",
    difficulty: "Advanced",
    description: "Learn about HDCP (High-bandwidth Digital Content Protection) and understand its role in the DRM chain.",
    objectives: [
      "Understand HDCP versions",
      "Learn about the HDCP handshake",
      "Study known vulnerabilities",
      "Explore detection mechanisms",
    ],
    prerequisites: [
      "Understanding of display protocols",
      "Hardware security concepts",
    ],
  },
  "defense/attestation": {
    title: "Device Attestation Lab",
    difficulty: "Advanced",
    description: "Implement device attestation to verify client integrity before issuing licenses.",
    objectives: [
      "Build an attestation verification system",
      "Implement certificate chain validation",
      "Create device fingerprinting",
      "Handle attestation failures",
    ],
    prerequisites: [
      "PKI and certificate knowledge",
      "Server-side programming",
    ],
  },
  "defense/watermarking": {
    title: "Watermarking Lab",
    difficulty: "Intermediate",
    description: "Learn forensic watermarking techniques for tracking content leaks and identifying the source of piracy.",
    objectives: [
      "Implement A/B watermarking",
      "Create invisible watermarks",
      "Build watermark detection",
      "Study robustness against attacks",
    ],
    prerequisites: [
      "Video encoding basics",
      "Understanding of streaming",
    ],
  },
  "defense/anomaly": {
    title: "Anomaly Detection Lab",
    difficulty: "Advanced",
    description: "Build systems to detect suspicious license acquisition patterns that may indicate piracy or abuse.",
    objectives: [
      "Define normal usage patterns",
      "Implement rate limiting",
      "Create behavioral analysis",
      "Build alerting systems",
    ],
    prerequisites: [
      "Data analysis skills",
      "Understanding of license flows",
    ],
  },
};

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-500/10 text-green-500";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500";
    case "Advanced":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
}

// Map of lab keys to their interactive components
const labComponents: Record<string, React.ComponentType> = {
  "license-server": LicenseServerLab,
  "key-exchange": KeyExchangeLab,
  "encryption": EncryptionLab,
  "cdm-simulator": CDMSimulatorLab,
};

export default function LabPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = use(params);
  const labKey = slug.join("/");
  const lab = labs[labKey];

  if (!lab) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-bold">Lab Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The lab you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/labs">
            <Button className="mt-4">Back to Labs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/labs">
          <Button variant="ghost" size="sm" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Labs
          </Button>
        </Link>

        <header className="mb-8">
          <Badge className={getDifficultyColor(lab.difficulty)}>
            {lab.difficulty}
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">{lab.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{lab.description}</p>
        </header>

        {lab.warning && (
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-200">{lab.warning}</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lab.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lab.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Lab Component */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold mb-6">Interactive Lab Environment</h2>
          {labComponents[labKey] ? (
            (() => {
              const LabComponent = labComponents[labKey];
              return <LabComponent />;
            })()
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>This lab is under development. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
