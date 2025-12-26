'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Trophy,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Star,
  Lock,
  Key,
  Network,
  Eye,
  ChevronDown,
  ChevronUp,
  PartyPopper,
  Code,
  ShieldOff,
} from 'lucide-react';
import Link from 'next/link';
import { getChallenge, type Challenge } from '@/lib/challenges';
import { useProgressStore } from '@/stores/progressStore';

const categoryIcons: Record<string, typeof Lock> = {
  encryption: Key,
  'protocol-analysis': Network,
  forensics: Eye,
  'reverse-engineering': Code,
  'defense-bypass': ShieldOff,
};

const difficultyConfig: Record<string, { color: string; stars: number }> = {
  beginner: { color: 'bg-green-500/10 text-green-500 border-green-500/30', stars: 1 },
  intermediate: { color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30', stars: 2 },
  advanced: { color: 'bg-orange-500/10 text-orange-500 border-orange-500/30', stars: 3 },
  expert: { color: 'bg-red-500/10 text-red-500 border-red-500/30', stars: 4 },
};

export default function ChallengePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState<number[]>([]);
  const [showSolution, setShowSolution] = useState(false);

  const { challengesCompleted, markChallengeCompleted } = useProgressStore();
  const isCompleted = challengesCompleted.includes(id);

  useEffect(() => {
    const c = getChallenge(id);
    setChallenge(c);
    if (!c) {
      router.push('/challenges');
    }
  }, [id, router]);

  if (!challenge) {
    return (
      <div className="container max-w-4xl py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const Icon = categoryIcons[challenge.category] || Lock;
  const config = difficultyConfig[challenge.difficulty];

  const handleSubmit = () => {
    const isCorrect = challenge.verifyAnswer(answer);
    setResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect && !isCompleted) {
      markChallengeCompleted(id, challenge.points);
    }
  };

  const revealHint = (index: number) => {
    if (!hintsRevealed.includes(index)) {
      setHintsRevealed([...hintsRevealed, index]);
    }
  };

  const allHintsRevealed = hintsRevealed.length === challenge.hints.length;

  return (
    <div className="container max-w-4xl py-8">
      {/* Back navigation */}
      <Link href="/challenges" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Challenges
      </Link>

      {/* Challenge header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-500/10' : 'bg-primary/10'}`}>
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <Icon className="w-6 h-6 text-primary" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{challenge.title}</h1>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="outline">{challenge.category.replace('-', ' ')}</Badge>
          <Badge variant="outline" className={config.color}>
            {Array.from({ length: config.stars }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Trophy className="w-4 h-4 text-warning" />
            <span className="font-medium">{challenge.points}</span>
            <span className="text-muted-foreground">pts</span>
          </div>
          {isCompleted && (
            <Badge variant="default" className="bg-green-600">
              Completed
            </Badge>
          )}
        </div>
      </div>

      {/* Scenario */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Scenario</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-muted-foreground">{challenge.scenario}</p>
          </div>

          {Object.keys(challenge.initialData).length > 0 && (
            <>
              <Separator className="my-4" />
              <h4 className="font-medium mb-3">Given Data:</h4>
              <div className="space-y-2 bg-zinc-950 rounded-lg p-4 font-mono text-sm">
                {Object.entries(challenge.initialData).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-muted-foreground">{key}:</span>{' '}
                    <span className="text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Hints */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-warning" />
            Hints
          </CardTitle>
          <CardDescription>
            Reveal hints if you&apos;re stuck (no point penalty)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {challenge.hints.map((hint, index) => (
              <div key={index}>
                {hintsRevealed.includes(index) ? (
                  <div className="p-3 rounded-lg border bg-muted/50">
                    <span className="text-sm font-medium">Hint {index + 1}:</span>{' '}
                    <span className="text-muted-foreground">{hint}</span>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => revealHint(index)}
                    className="gap-2"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Reveal Hint {index + 1}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Answer submission */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Answer</CardTitle>
          <CardDescription>
            Enter your solution below
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="font-mono"
            rows={3}
          />

          <div className="flex gap-3">
            <Button
              onClick={handleSubmit}
              disabled={!answer.trim()}
              className="gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Submit Answer
            </Button>

            {(isCompleted || allHintsRevealed) && (
              <Button
                variant="outline"
                onClick={() => setShowSolution(!showSolution)}
                className="gap-2"
              >
                {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showSolution ? 'Hide' : 'Show'} Solution
              </Button>
            )}
          </div>

          {/* Result feedback */}
          {result === 'correct' && (
            <Alert className="border-green-500 bg-green-500/10">
              <PartyPopper className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-400">Correct!</AlertTitle>
              <AlertDescription>
                Great job! You&apos;ve earned {challenge.points} points.
              </AlertDescription>
            </Alert>
          )}

          {result === 'incorrect' && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Not quite right</AlertTitle>
              <AlertDescription>
                Try again, or reveal more hints for guidance.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Solution (if revealed) */}
      {showSolution && (
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Answer:</span>
                <div className="mt-1 p-3 rounded-lg bg-primary/10 font-mono">
                  {challenge.solution}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Explanation:</span>
                <div className="mt-1 p-3 rounded-lg bg-muted/50 whitespace-pre-wrap text-sm text-muted-foreground">
                  {challenge.solutionExplanation}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
