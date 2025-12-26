import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  BookOpen,
  Shield,
  Lock,
  Network,
  Clock,
  ArrowRight,
} from 'lucide-react';

const topics = [
  {
    id: 'overview',
    title: 'DRM Overview',
    description: 'Understanding Digital Rights Management fundamentals, history, and ecosystem.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    readTime: 15,
    icon: BookOpen,
  },
  {
    id: 'widevine',
    title: 'Widevine',
    description: "Google's DRM solution for Android, Chrome, and connected devices.",
    category: 'DRM Systems',
    difficulty: 'Intermediate',
    readTime: 25,
    icon: Shield,
  },
  {
    id: 'fairplay',
    title: 'FairPlay',
    description: "Apple's proprietary DRM for iOS, macOS, and Safari browser.",
    category: 'DRM Systems',
    difficulty: 'Intermediate',
    readTime: 20,
    icon: Shield,
  },
  {
    id: 'playready',
    title: 'PlayReady',
    description: "Microsoft's DRM for Windows, Xbox, and smart TV platforms.",
    category: 'DRM Systems',
    difficulty: 'Intermediate',
    readTime: 20,
    icon: Shield,
  },
  {
    id: 'encryption',
    title: 'Encryption Basics',
    description: 'AES, RSA, and encryption schemes used in content protection.',
    category: 'Cryptography',
    difficulty: 'Beginner',
    readTime: 30,
    icon: Lock,
  },
  {
    id: 'protocols',
    title: 'License Protocols',
    description: 'How license requests, responses, and key delivery work.',
    category: 'Protocols',
    difficulty: 'Advanced',
    readTime: 35,
    icon: Network,
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-500 border-green-500/30',
  Intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
  Advanced: 'bg-red-500/10 text-red-500 border-red-500/30',
};

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Knowledge Base</h1>
              <p className="mt-2 text-muted-foreground">
                Comprehensive educational content about DRM security concepts, systems,
                and protocols.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {topics.map((topic) => (
                <Link key={topic.id} href={`/knowledge-base/${topic.id}`}>
                  <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <topic.icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge
                          variant="outline"
                          className={difficultyColors[topic.difficulty]}
                        >
                          {topic.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="mt-4">{topic.title}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {topic.readTime} min read
                        </div>
                        <div className="flex items-center text-sm text-primary">
                          Read <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
