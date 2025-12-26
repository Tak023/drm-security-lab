'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProgressStore } from '@/stores/progressStore';
import Link from 'next/link';
import {
  Trophy,
  Lock,
  Key,
  Network,
  Eye,
  ArrowRight,
  CheckCircle2,
  Star,
  Code,
  ShieldOff,
  Cpu,
  FileSearch,
} from 'lucide-react';

const challenges = [
  // Encryption
  {
    id: 'enc-basics-01',
    title: 'Decode the Key',
    description: 'A license server responded with an encrypted key. Can you determine the original content key?',
    category: 'encryption',
    difficulty: 'beginner',
    points: 100,
    icon: Key,
  },
  {
    id: 'enc-basics-02',
    title: 'IV Discovery',
    description: 'The encryption is AES-CBC, but something is wrong with the IV. Find the issue.',
    category: 'encryption',
    difficulty: 'beginner',
    points: 100,
    icon: Lock,
  },
  // Protocol Analysis
  {
    id: 'proto-01',
    title: 'License Request Analysis',
    description: 'Analyze a captured license request and identify the protected content ID.',
    category: 'protocol-analysis',
    difficulty: 'intermediate',
    points: 250,
    icon: Network,
  },
  {
    id: 'proto-02',
    title: 'Session Token Weakness',
    description: 'A session token generator has a flaw. Find it and predict the next token.',
    category: 'protocol-analysis',
    difficulty: 'intermediate',
    points: 250,
    icon: Network,
  },
  // Reverse Engineering
  {
    id: 'rev-01',
    title: 'CDM Function Analysis',
    description: 'Analyze disassembled CDM code to find the key derivation function.',
    category: 'reverse-engineering',
    difficulty: 'intermediate',
    points: 300,
    icon: Code,
  },
  {
    id: 'rev-02',
    title: 'Anti-Debug Detection',
    description: 'The CDM uses anti-debugging. Identify the technique and the bypass.',
    category: 'reverse-engineering',
    difficulty: 'advanced',
    points: 500,
    icon: Cpu,
  },
  {
    id: 'rev-03',
    title: 'Obfuscated String Recovery',
    description: 'Recover the hidden license server URL from obfuscated code.',
    category: 'reverse-engineering',
    difficulty: 'advanced',
    points: 500,
    icon: Code,
  },
  {
    id: 'rev-04',
    title: 'TEE Escape Analysis',
    description: 'Analyze a vulnerability that allows L1 key extraction from TEE.',
    category: 'reverse-engineering',
    difficulty: 'expert',
    points: 1000,
    icon: Cpu,
  },
  // Defense Bypass
  {
    id: 'bypass-01',
    title: 'Attestation Forgery',
    description: 'Craft a valid attestation response to bypass device verification.',
    category: 'defense-bypass',
    difficulty: 'advanced',
    points: 500,
    icon: ShieldOff,
  },
  {
    id: 'bypass-02',
    title: 'Rate Limit Evasion',
    description: 'Find a way to bypass the license server rate limiting.',
    category: 'defense-bypass',
    difficulty: 'intermediate',
    points: 300,
    icon: ShieldOff,
  },
  {
    id: 'bypass-03',
    title: 'Watermark Removal Analysis',
    description: 'Identify the watermark embedding technique and its weakness.',
    category: 'defense-bypass',
    difficulty: 'expert',
    points: 750,
    icon: ShieldOff,
  },
  // Forensics
  {
    id: 'forensics-01',
    title: 'Watermark Hunter',
    description: 'A video has been leaked. Analyze the segments to identify the watermark pattern.',
    category: 'forensics',
    difficulty: 'advanced',
    points: 500,
    icon: Eye,
  },
  {
    id: 'forensics-02',
    title: 'Timeline Reconstruction',
    description: 'Multiple license requests were made. Reconstruct the attack timeline.',
    category: 'forensics',
    difficulty: 'advanced',
    points: 500,
    icon: Eye,
  },
  {
    id: 'forensics-03',
    title: 'Memory Dump Analysis',
    description: 'Extract the content key from a CDM memory dump.',
    category: 'forensics',
    difficulty: 'expert',
    points: 750,
    icon: FileSearch,
  },
  {
    id: 'forensics-04',
    title: 'Traffic Correlation',
    description: 'Correlate encrypted traffic to identify the premium content being accessed.',
    category: 'forensics',
    difficulty: 'expert',
    points: 750,
    icon: Network,
  },
];

const difficultyConfig: Record<string, { color: string; stars: number }> = {
  beginner: { color: 'bg-green-500/10 text-green-500 border-green-500/30', stars: 1 },
  intermediate: { color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30', stars: 2 },
  advanced: { color: 'bg-orange-500/10 text-orange-500 border-orange-500/30', stars: 3 },
  expert: { color: 'bg-red-500/10 text-red-500 border-red-500/30', stars: 4 },
};

const categoryLabels: Record<string, string> = {
  encryption: 'Encryption',
  'protocol-analysis': 'Protocols',
  forensics: 'Forensics',
  'reverse-engineering': 'Reverse Engineering',
  'defense-bypass': 'Defense Bypass',
};

export default function ChallengesPage() {
  const { challengesCompleted, totalPoints } = useProgressStore();

  const solvedCount = challengesCompleted.length;
  const totalChallenges = challenges.length;
  const maxPoints = challenges.reduce((sum, c) => sum + c.points, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
            {/* Header with stats */}
            <div className="mb-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                    <Trophy className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      CTF Challenges
                    </h1>
                    <p className="text-muted-foreground">
                      Test your DRM security knowledge
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="hidden rounded-lg border border-border bg-card p-4 sm:block">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {solvedCount}/{totalChallenges}
                      </div>
                      <div className="text-xs text-muted-foreground">Solved</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning">
                        {totalPoints}
                      </div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {challenges.map((challenge) => {
                const isCompleted = challengesCompleted.includes(challenge.id);
                const config = difficultyConfig[challenge.difficulty];

                return (
                  <Link key={challenge.id} href={`/challenges/${challenge.id}`}>
                    <Card
                      className={`h-full transition-all hover:border-primary/50 hover:shadow-lg ${
                        isCompleted ? 'border-success/50 bg-success/5' : ''
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                                isCompleted
                                  ? 'bg-success/10 text-success'
                                  : 'bg-primary/10 text-primary'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <challenge.icon className="h-5 w-5" />
                              )}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {categoryLabels[challenge.category]}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={config.color}>
                              {Array.from({ length: config.stars }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 fill-current"
                                />
                              ))}
                            </Badge>
                          </div>
                        </div>
                        <CardTitle className="mt-4">{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm">
                            <Trophy className="h-4 w-4 text-warning" />
                            <span className="font-medium text-foreground">
                              {challenge.points}
                            </span>
                            <span className="text-muted-foreground">pts</span>
                          </div>
                          <div className="flex items-center text-sm text-primary">
                            {isCompleted ? 'Review' : 'Start'}{' '}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Total points summary */}
            <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-warning">
                <Trophy className="h-6 w-6" />
                {challenges.reduce((sum, c) => sum + c.points, 0).toLocaleString()} Total Points Available
              </div>
              <p className="mt-2 text-muted-foreground">
                Complete all {challenges.length} challenges across 5 categories: Encryption, Protocols, Reverse Engineering, Defense Bypass, and Forensics.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
