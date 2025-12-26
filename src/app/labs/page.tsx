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
  Network,
  Key,
  Lock,
  Shield,
  Sword,
  Eye,
  Fingerprint,
  FileText,
  AlertTriangle,
  ArrowRight,
  FlaskConical,
  ChevronRight,
  Filter,
  Layers,
  Zap,
  Target,
  Clock,
  CheckCircle2,
  Play,
  Terminal,
} from "lucide-react";

interface Lab {
  id: string;
  title: string;
  description: string;
  icon: typeof Network;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "core" | "attack" | "defense";
  duration: string;
  topics: string[];
}

const allLabs: Lab[] = [
  // Core Labs
  {
    id: "license-server",
    title: "License Server",
    description:
      "Explore how DRM license servers issue content decryption keys and manage license policies.",
    icon: Network,
    difficulty: "Beginner",
    category: "core",
    duration: "20 min",
    topics: ["License Acquisition", "Policy Enforcement", "Key Delivery"],
  },
  {
    id: "key-exchange",
    title: "Key Exchange",
    description:
      "Understand the cryptographic key exchange process between clients and license servers.",
    icon: Key,
    difficulty: "Intermediate",
    category: "core",
    duration: "30 min",
    topics: ["Diffie-Hellman", "Key Derivation", "Secure Channels"],
  },
  {
    id: "encryption",
    title: "Encryption Lab",
    description:
      "Hands-on experience with AES encryption and decryption used in DRM systems.",
    icon: Lock,
    difficulty: "Intermediate",
    category: "core",
    duration: "25 min",
    topics: ["AES-CTR", "AES-CBC", "IV Generation", "Key Management"],
  },
  {
    id: "cdm-simulator",
    title: "CDM Simulator",
    description:
      "Simulate a Content Decryption Module to understand how DRM clients work.",
    icon: Shield,
    difficulty: "Advanced",
    category: "core",
    duration: "45 min",
    topics: ["CDM Workflow", "Device Attestation", "License Parsing"],
  },
  // Attack Labs
  {
    id: "attacks/cdm-extraction",
    title: "CDM Extraction",
    description: "Learn how attackers attempt to extract CDM keys from devices.",
    icon: Sword,
    difficulty: "Advanced",
    category: "attack",
    duration: "40 min",
    topics: ["Binary Analysis", "Memory Forensics", "Key Recovery"],
  },
  {
    id: "attacks/key-sharing",
    title: "Key Sharing",
    description: "Understand the key sharing attack vector and its implications.",
    icon: Key,
    difficulty: "Intermediate",
    category: "attack",
    duration: "25 min",
    topics: ["Key Distribution", "Piracy Networks", "Countermeasures"],
  },
  {
    id: "attacks/mitm",
    title: "MITM Attack",
    description:
      "Explore man-in-the-middle attack scenarios on license acquisition.",
    icon: Network,
    difficulty: "Advanced",
    category: "attack",
    duration: "35 min",
    topics: ["Protocol Analysis", "Traffic Interception", "Certificate Pinning"],
  },
  {
    id: "attacks/hdcp-bypass",
    title: "HDCP Bypass",
    description: "Learn about HDCP protection and bypass techniques.",
    icon: Eye,
    difficulty: "Advanced",
    category: "attack",
    duration: "30 min",
    topics: ["HDCP Protocol", "Hardware Attacks", "Output Protection"],
  },
  // Defense Labs
  {
    id: "defense/attestation",
    title: "Device Attestation",
    description:
      "Implement device attestation to verify client integrity.",
    icon: Fingerprint,
    difficulty: "Advanced",
    category: "defense",
    duration: "45 min",
    topics: ["TEE Integration", "Certificate Chains", "Revocation"],
  },
  {
    id: "defense/watermarking",
    title: "Watermarking",
    description:
      "Learn forensic watermarking techniques for content tracking.",
    icon: FileText,
    difficulty: "Intermediate",
    category: "defense",
    duration: "30 min",
    topics: ["Invisible Watermarks", "Forensic Tracking", "Robustness"],
  },
  {
    id: "defense/anomaly",
    title: "Anomaly Detection",
    description:
      "Build anomaly detection systems to identify suspicious behavior.",
    icon: AlertTriangle,
    difficulty: "Advanced",
    category: "defense",
    duration: "40 min",
    topics: ["Behavioral Analysis", "Pattern Recognition", "Alert Systems"],
  },
];

const categories = [
  { id: "all", name: "All Labs", icon: Layers, color: "text-foreground", bgColor: "bg-foreground/10" },
  { id: "core", name: "Core", icon: FlaskConical, color: "text-green-400", bgColor: "bg-green-500/20" },
  { id: "attack", name: "Attack", icon: Sword, color: "text-red-400", bgColor: "bg-red-500/20" },
  { id: "defense", name: "Defense", icon: Shield, color: "text-blue-400", bgColor: "bg-blue-500/20" },
];

const difficultyConfig = {
  Beginner: { color: "text-green-400", bgColor: "bg-green-500/20", border: "border-green-500/30" },
  Intermediate: { color: "text-yellow-400", bgColor: "bg-yellow-500/20", border: "border-yellow-500/30" },
  Advanced: { color: "text-red-400", bgColor: "bg-red-500/20", border: "border-red-500/30" },
};

const categoryConfig = {
  core: { color: "text-green-400", bgColor: "bg-green-500/20", label: "Core Lab" },
  attack: { color: "text-red-400", bgColor: "bg-red-500/20", label: "Red Team" },
  defense: { color: "text-blue-400", bgColor: "bg-blue-500/20", label: "Blue Team" },
};

export default function LabsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredLab, setHoveredLab] = useState<string | null>(null);

  const filteredLabs = useMemo(() => {
    if (selectedCategory === "all") return allLabs;
    return allLabs.filter((lab) => lab.category === selectedCategory);
  }, [selectedCategory]);

  const stats = useMemo(() => ({
    total: allLabs.length,
    core: allLabs.filter((l) => l.category === "core").length,
    attack: allLabs.filter((l) => l.category === "attack").length,
    defense: allLabs.filter((l) => l.category === "defense").length,
    totalDuration: allLabs.reduce((sum, l) => sum + parseInt(l.duration), 0),
  }), []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-green-500/5 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 animate-slide-up">
              <FlaskConical className="mr-1 h-3 w-3" />
              Interactive Labs
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">Hands-on DRM Security Labs</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Learn by doing. Explore DRM concepts through interactive labs from both
              offensive and defensive perspectives.
            </p>

            {/* Stats Row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {[
                { label: "Labs", value: stats.total, icon: FlaskConical, color: "text-green-400" },
                { label: "Attack Labs", value: stats.attack, icon: Sword, color: "text-red-400" },
                { label: "Defense Labs", value: stats.defense, icon: Shield, color: "text-blue-400" },
                { label: "Total Time", value: `${stats.totalDuration}m`, icon: Clock, color: "text-purple-400" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-muted/30 border border-border/50">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span>View:</span>
            </div>
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`gap-2 whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? `${category.bgColor} ${category.color} border-transparent`
                      : "hover:bg-accent"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  {category.id !== "all" && (
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {allLabs.filter((l) => l.category === category.id).length}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Headers for filtered view */}
          {selectedCategory === "all" ? (
            <>
              {/* Core Labs Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <FlaskConical className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Core Labs</h2>
                    <p className="text-sm text-muted-foreground">Fundamental DRM concepts and mechanisms</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {allLabs.filter(l => l.category === "core").map((lab, index) => (
                    <LabCard key={lab.id} lab={lab} index={index} hoveredLab={hoveredLab} setHoveredLab={setHoveredLab} />
                  ))}
                </div>
              </div>

              {/* Attack Labs Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <Sword className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-red-400">Attack Labs</h2>
                    <p className="text-sm text-muted-foreground">Learn offensive techniques from a red team perspective</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {allLabs.filter(l => l.category === "attack").map((lab, index) => (
                    <LabCard key={lab.id} lab={lab} index={index} hoveredLab={hoveredLab} setHoveredLab={setHoveredLab} />
                  ))}
                </div>
              </div>

              {/* Defense Labs Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">Defense Labs</h2>
                    <p className="text-sm text-muted-foreground">Build defensive mechanisms from a blue team perspective</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {allLabs.filter(l => l.category === "defense").map((lab, index) => (
                    <LabCard key={lab.id} lab={lab} index={index} hoveredLab={hoveredLab} setHoveredLab={setHoveredLab} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredLabs.map((lab, index) => (
                <LabCard key={lab.id} lab={lab} index={index} hoveredLab={hoveredLab} setHoveredLab={setHoveredLab} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              After completing the labs, challenge yourself with our CTF-style challenges
              to earn points and prove your expertise.
            </p>
            <Link href="/challenges">
              <Button size="lg" className="gap-2 group">
                <Target className="h-5 w-5" />
                View Challenges
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function LabCard({
  lab,
  index,
  hoveredLab,
  setHoveredLab
}: {
  lab: Lab;
  index: number;
  hoveredLab: string | null;
  setHoveredLab: (id: string | null) => void;
}) {
  const diffConfig = difficultyConfig[lab.difficulty];
  const catConfig = categoryConfig[lab.category];
  const isHovered = hoveredLab === lab.id;

  return (
    <Link href={`/labs/${lab.id}`}>
      <Card
        className={`card-3d ${
          lab.category === "core" ? "glow-green" :
          lab.category === "attack" ? "glow-red" :
          "glow-blue"
        } h-full border-border/30 animate-slide-up group relative overflow-hidden`}
        style={{ animationDelay: `${index * 0.05}s` }}
        onMouseEnter={() => setHoveredLab(lab.id)}
        onMouseLeave={() => setHoveredLab(null)}
      >
        {/* Category gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${catConfig.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />

        <CardHeader className="relative">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="outline"
              className={`${catConfig.bgColor} ${catConfig.color} border-transparent`}
            >
              {catConfig.label}
            </Badge>
            <Badge
              variant="outline"
              className={`${diffConfig.bgColor} ${diffConfig.color} ${diffConfig.border}`}
            >
              {lab.difficulty}
            </Badge>
          </div>
          <div className="flex items-start gap-4">
            <div
              className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${catConfig.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
            >
              <lab.icon className={`h-6 w-6 ${catConfig.color}`} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                {lab.title}
              </CardTitle>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {lab.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Terminal className="h-3 w-3" />
                  Interactive
                </span>
              </div>
            </div>
          </div>
          <CardDescription className="mt-3">
            {lab.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative pt-0">
          {/* Topics */}
          <div className="flex flex-wrap gap-1 mb-4">
            {lab.topics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs bg-muted/50"
              >
                {topic}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
              <Play className="h-4 w-4" />
              Start Lab
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
