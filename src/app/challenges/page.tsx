"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Lock,
  Star,
  ArrowRight,
  Target,
  Shield,
  Zap,
  Brain,
  Code,
  Search,
  Key,
  FileSearch,
  Network,
  Cpu,
  Fingerprint,
  Filter,
  Flame,
  Award,
  TrendingUp,
} from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  category: string;
  solved: boolean;
  icon: typeof Trophy;
  skills: string[];
}

const challenges: Challenge[] = [
  // Beginner - Cryptography
  {
    id: "base64-decode",
    title: "Base64 License",
    description: "A license response is Base64 encoded. Decode it to find the hidden flag.",
    points: 50,
    difficulty: "Easy",
    category: "Basics",
    solved: false,
    icon: Code,
    skills: ["Encoding", "Base64"],
  },
  {
    id: "hex-analysis",
    title: "Hex Key Inspector",
    description: "Analyze a hex-encoded content key to extract the embedded flag.",
    points: 75,
    difficulty: "Easy",
    category: "Basics",
    solved: false,
    icon: Search,
    skills: ["Hex", "Analysis"],
  },
  {
    id: "license-parser",
    title: "License Parser",
    description: "Parse and decode a Widevine license response to find the hidden flag.",
    points: 100,
    difficulty: "Easy",
    category: "Cryptography",
    solved: false,
    icon: Key,
    skills: ["Parsing", "Widevine"],
  },
  {
    id: "xor-encryption",
    title: "XOR Decryption",
    description: "A content key has been XOR encrypted with a known key. Recover the original.",
    points: 100,
    difficulty: "Easy",
    category: "Cryptography",
    solved: false,
    icon: Zap,
    skills: ["XOR", "Encryption"],
  },
  // Intermediate - Cryptography
  {
    id: "key-derivation",
    title: "Key Derivation",
    description: "Derive the content key from a license using the correct key derivation function.",
    points: 200,
    difficulty: "Medium",
    category: "Cryptography",
    solved: false,
    icon: Key,
    skills: ["KDF", "HKDF"],
  },
  {
    id: "aes-decrypt",
    title: "AES Content Key",
    description: "Given an encrypted content key and initialization vector, decrypt using AES-CTR.",
    points: 250,
    difficulty: "Medium",
    category: "Cryptography",
    solved: false,
    icon: Shield,
    skills: ["AES", "CTR Mode"],
  },
  {
    id: "pssh-parser",
    title: "PSSH Box Analysis",
    description: "Parse a PSSH box from an MP4 file to extract the key IDs and DRM data.",
    points: 200,
    difficulty: "Medium",
    category: "Forensics",
    solved: false,
    icon: FileSearch,
    skills: ["MP4", "PSSH"],
  },
  // Intermediate - Analysis
  {
    id: "certificate-analysis",
    title: "Certificate Analysis",
    description: "Analyze DRM certificates to identify vulnerabilities in the chain of trust.",
    points: 300,
    difficulty: "Medium",
    category: "Analysis",
    solved: false,
    icon: Fingerprint,
    skills: ["Certificates", "PKI"],
  },
  {
    id: "license-policy",
    title: "Policy Bypass",
    description: "A license has restrictive policies. Find the flaw that allows bypassing them.",
    points: 275,
    difficulty: "Medium",
    category: "Analysis",
    solved: false,
    icon: Target,
    skills: ["Policy", "Bypass"],
  },
  {
    id: "watermark-extraction",
    title: "Watermark Extraction",
    description: "Extract the hidden watermark from a video sample.",
    points: 350,
    difficulty: "Medium",
    category: "Forensics",
    solved: false,
    icon: Search,
    skills: ["Watermarking", "Forensics"],
  },
  // Hard - Protocol
  {
    id: "protocol-replay",
    title: "Protocol Replay",
    description: "Identify the vulnerability in a license acquisition protocol and craft a replay attack.",
    points: 400,
    difficulty: "Hard",
    category: "Protocol",
    solved: false,
    icon: Network,
    skills: ["Replay", "Protocol"],
  },
  {
    id: "mitm-detection",
    title: "MITM Resistance",
    description: "Analyze a license protocol for MITM vulnerabilities. Find the missing protection.",
    points: 400,
    difficulty: "Hard",
    category: "Protocol",
    solved: false,
    icon: Shield,
    skills: ["MITM", "TLS"],
  },
  {
    id: "session-hijack",
    title: "Session Takeover",
    description: "A CDM session token has been captured. Use it to obtain a license.",
    points: 450,
    difficulty: "Hard",
    category: "Protocol",
    solved: false,
    icon: Zap,
    skills: ["Sessions", "Tokens"],
  },
  // Hard - Implementation
  {
    id: "cdm-emulation",
    title: "CDM Emulation",
    description: "Build a minimal CDM emulator to decrypt protected content.",
    points: 500,
    difficulty: "Hard",
    category: "Implementation",
    solved: false,
    icon: Cpu,
    skills: ["CDM", "Emulation"],
  },
  {
    id: "key-rotation",
    title: "Key Rotation Attack",
    description: "Content uses key rotation. Find the pattern to predict the next key ID.",
    points: 450,
    difficulty: "Hard",
    category: "Implementation",
    solved: false,
    icon: Key,
    skills: ["Key Rotation", "Prediction"],
  },
  // Expert
  {
    id: "device-attestation",
    title: "Attestation Bypass",
    description: "The license server requires device attestation. Spoof a valid attestation.",
    points: 600,
    difficulty: "Expert",
    category: "Advanced",
    solved: false,
    icon: Brain,
    skills: ["Attestation", "Spoofing"],
  },
];

const difficultyConfig = {
  Easy: {
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    icon: Target,
    label: "Easy",
  },
  Medium: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    icon: Flame,
    label: "Medium",
  },
  Hard: {
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-500/30",
    icon: Zap,
    label: "Hard",
  },
  Expert: {
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    icon: Brain,
    label: "Expert",
  },
};

const categoryConfig: Record<string, { color: string; bgColor: string }> = {
  Basics: { color: "text-blue-400", bgColor: "bg-blue-500/20" },
  Cryptography: { color: "text-cyan-400", bgColor: "bg-cyan-500/20" },
  Forensics: { color: "text-orange-400", bgColor: "bg-orange-500/20" },
  Analysis: { color: "text-pink-400", bgColor: "bg-pink-500/20" },
  Protocol: { color: "text-indigo-400", bgColor: "bg-indigo-500/20" },
  Implementation: { color: "text-emerald-400", bgColor: "bg-emerald-500/20" },
  Advanced: { color: "text-purple-400", bgColor: "bg-purple-500/20" },
};

function ChallengeCard({ challenge, index }: { challenge: Challenge; index: number }) {
  const difficulty = difficultyConfig[challenge.difficulty];
  const category = categoryConfig[challenge.category] || { color: "text-gray-400", bgColor: "bg-gray-500/20" };
  const Icon = challenge.icon;

  const glowColor =
    challenge.difficulty === "Easy" ? "glow-green" :
    challenge.difficulty === "Medium" ? "glow-yellow" :
    challenge.difficulty === "Hard" ? "glow-red" :
    "glow-purple";

  return (
    <Link href={`/challenges/${challenge.id}`}>
      <Card
        className={`card-3d ${glowColor} group relative h-full overflow-hidden border-border/30 animate-slide-up`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${difficulty.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none`} />

        {/* Points badge - top right corner */}
        <div className="absolute right-4 top-4 z-10">
          <div className="flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-400">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-bold">{challenge.points}</span>
          </div>
        </div>

        <CardHeader className="relative pb-3">
          <div className="flex items-start gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${difficulty.bgColor} ${difficulty.borderColor} border transition-transform duration-300 group-hover:scale-110`}>
              <Icon className={`h-6 w-6 ${difficulty.color}`} />
            </div>
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${category.bgColor} ${category.color} border-0`}>
                  {challenge.category}
                </Badge>
                <Badge className={`${difficulty.bgColor} ${difficulty.color} border-0`}>
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardTitle className="flex items-center gap-2 text-lg">
                {challenge.solved ? (
                  <Trophy className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="truncate">{challenge.title}</span>
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative pt-0">
          <CardDescription className="mb-4 line-clamp-2">
            {challenge.description}
          </CardDescription>

          {/* Skills tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {challenge.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action link */}
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${challenge.solved ? "text-green-400" : "text-muted-foreground"}`}>
              {challenge.solved ? "✓ Completed" : "Not attempted"}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              {challenge.solved ? "View Solution" : "Start Challenge"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ChallengesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const difficulties = ["All", "Easy", "Medium", "Hard", "Expert"];
  const categories = ["All", ...Array.from(new Set(challenges.map((c) => c.category)))];

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const matchesDifficulty = selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === "All" || challenge.category === selectedCategory;
      const matchesSearch = searchQuery === "" ||
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        challenge.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDifficulty && matchesCategory && matchesSearch;
    });
  }, [selectedDifficulty, selectedCategory, searchQuery]);

  const totalPoints = challenges.reduce((sum, c) => sum + c.points, 0);
  const earnedPoints = challenges.filter((c) => c.solved).reduce((sum, c) => sum + c.points, 0);
  const solvedCount = challenges.filter((c) => c.solved).length;

  const statsByDifficulty = useMemo(() => {
    return {
      Easy: challenges.filter((c) => c.difficulty === "Easy").length,
      Medium: challenges.filter((c) => c.difficulty === "Medium").length,
      Hard: challenges.filter((c) => c.difficulty === "Hard").length,
      Expert: challenges.filter((c) => c.difficulty === "Expert").length,
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-16 sm:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 animate-slide-up">
              <Trophy className="h-8 w-8 text-yellow-400" />
            </div>
            <Badge variant="secondary" className="mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Capture The Flag
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <span className="gradient-text">DRM Security Challenges</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Test your skills with hands-on challenges covering cryptography, protocol analysis,
              forensics, and more. Earn points and track your progress.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <Card className="card-3d glow-yellow border-border/30">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{solvedCount}/{challenges.length}</p>
                  <p className="text-sm text-muted-foreground">Challenges Solved</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-3d glow-green border-border/30">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Star className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{earnedPoints}</p>
                  <p className="text-sm text-muted-foreground">Points Earned</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-3d glow-blue border-border/30">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{totalPoints}</p>
                  <p className="text-sm text-muted-foreground">Total Points Available</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-3d glow-purple border-border/30">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{Math.round((earnedPoints / totalPoints) * 100)}%</p>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Difficulty Overview */}
      <section className="border-b border-border/50 bg-muted/30 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {(["Easy", "Medium", "Hard", "Expert"] as const).map((diff) => {
              const config = difficultyConfig[diff];
              const Icon = config.icon;
              return (
                <div key={diff} className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.bgColor}`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>
                  <div>
                    <span className={`text-sm font-medium ${config.color}`}>{diff}</span>
                    <span className="ml-2 text-sm text-muted-foreground">({statsByDifficulty[diff]})</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-30 border-b border-border/50 bg-background/80 py-4 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border/50 bg-muted/50 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Difficulty:</span>
                <div className="flex gap-1">
                  {difficulties.map((diff) => (
                    <Button
                      key={diff}
                      variant={selectedDifficulty === diff ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(diff)}
                      className="h-8 px-3 text-xs"
                    >
                      {diff}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="h-6 w-px bg-border hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredChallenges.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground">No challenges found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your filters or search query
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedDifficulty("All");
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredChallenges.length} of {challenges.length} challenges
                </p>
                <p className="text-sm text-muted-foreground">
                  {filteredChallenges.reduce((sum, c) => sum + c.points, 0)} points available
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredChallenges.map((challenge, index) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Progress CTA Section */}
      <section className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to Test Your Skills?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with the basics and work your way up to expert-level challenges.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/labs">
                <Button variant="outline" size="lg" className="gap-2">
                  <Cpu className="h-4 w-4" />
                  Practice in Labs
                </Button>
              </Link>
              <Link href="/knowledge-base">
                <Button variant="outline" size="lg" className="gap-2">
                  <FileSearch className="h-4 w-4" />
                  Study Knowledge Base
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
