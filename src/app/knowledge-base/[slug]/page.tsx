import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from '@/lib/content/articles';
import Link from 'next/link';
import {
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  AlertTriangle,
  Info,
  Shield,
  Sword,
  Lightbulb,
  Lock,
  Key,
  Network,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  };
}

const difficultyColors: Record<string, string> = {
  beginner: 'bg-green-500/10 text-green-500 border-green-500/30',
  intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
  advanced: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
  expert: 'bg-red-500/10 text-red-500 border-red-500/30',
};

const categoryLabels: Record<string, string> = {
  fundamentals: 'Fundamentals',
  'drm-systems': 'DRM Systems',
  encryption: 'Encryption',
  'attack-vectors': 'Attack Vectors',
  'defense-mechanisms': 'Defense',
  protocols: 'Protocols',
};

// MDX Components defined inline for RSC compatibility
function InfoBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-primary/50 bg-primary/5">
      <Info className="h-4 w-4 text-primary" />
      {title && <AlertTitle className="text-primary">{title}</AlertTitle>}
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function WarningBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-yellow-500/50 bg-yellow-500/5">
      <AlertTriangle className="h-4 w-4 text-yellow-500" />
      {title && <AlertTitle className="text-yellow-500">{title}</AlertTitle>}
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function RedTeamNote({ title = 'Red Team Insight', children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-red-500/50 bg-red-500/5">
      <Sword className="h-4 w-4 text-red-500" />
      <AlertTitle className="text-red-500">{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function BlueTeamNote({ title = 'Blue Team Defense', children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-cyan-500/50 bg-cyan-500/5">
      <Shield className="h-4 w-4 text-cyan-500" />
      <AlertTitle className="text-cyan-500">{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function KeyConcept({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="h-4 w-4 text-yellow-500" />
        <span className="font-semibold text-foreground">{term}</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function SecurityLevel({ level, description }: { level: 'L1' | 'L2' | 'L3'; description: string }) {
  const colors = {
    L1: 'bg-green-500/10 text-green-500 border-green-500/30',
    L2: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
    L3: 'bg-red-500/10 text-red-500 border-red-500/30',
  };

  const icons = {
    L1: CheckCircle2,
    L2: AlertTriangle,
    L3: XCircle,
  };

  const Icon = icons[level];

  return (
    <div className={`my-2 flex items-start gap-3 rounded-lg border p-3 ${colors[level]}`}>
      <Icon className="h-5 w-5 mt-0.5" />
      <div>
        <div className="font-semibold">{level} - Security Level {level.charAt(1)}</div>
        <div className="text-sm opacity-90">{description}</div>
      </div>
    </div>
  );
}

function ConceptCard({ title, icon, children }: { title: string; icon?: string; children: ReactNode }) {
  const iconMap: Record<string, typeof Lock> = {
    lock: Lock,
    key: Key,
    shield: Shield,
    network: Network,
    book: BookOpen,
    lightbulb: Lightbulb,
  };
  const Icon = iconMap[icon || 'lightbulb'] || Lightbulb;

  return (
    <Card className="my-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">{children}</CardContent>
    </Card>
  );
}

function ComparisonTable({ data }: { data: { feature: string; widevine: string; fairplay: string; playready: string }[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Widevine</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">FairPlay</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">PlayReady</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.widevine}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.fairplay}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.playready}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Code block component
function CodeBlock({ children, className }: { children: string; className?: string }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4">
      <code className={`text-sm text-zinc-100 ${className || ''}`}>
        {children}
      </code>
    </pre>
  );
}

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
      {children}
    </code>
  );
}

// MDX components mapping
const components = {
  h1: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h1 id={id} className="scroll-mt-20 text-3xl font-bold tracking-tight text-foreground mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h2 id={id} className="scroll-mt-20 text-2xl font-semibold text-foreground mt-8 mb-3 border-b border-border pb-2">
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h3 id={id} className="scroll-mt-20 text-xl font-semibold text-foreground mt-6 mb-2">
      {children}
    </h3>
  ),
  h4: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h4 id={id} className="scroll-mt-20 text-lg font-medium text-foreground mt-4 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-muted-foreground leading-7 mb-4">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="leading-7">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children, className }: { children: string; className?: string }) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    return <InlineCode>{children}</InlineCode>;
  },
  pre: ({ children }: { children: ReactNode }) => <>{children}</>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="my-4 border-l-4 border-primary/50 bg-primary/5 py-2 pl-4 pr-2 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  table: ({ children }: { children: ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-muted/50">{children}</thead>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="border-b border-border last:border-0">{children}</tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-3 text-muted-foreground">{children}</td>
  ),
  hr: () => <Separator className="my-8" />,
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  // Custom DRM components
  InfoBox,
  WarningBox,
  RedTeamNote,
  BlueTeamNote,
  KeyConcept,
  SecurityLevel,
  ConceptCard,
  ComparisonTable,
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  // Get navigation (prev/next articles)
  const allSlugs = getArticleSlugs();
  const sortedSlugs = allSlugs.sort((a, b) => {
    const articleA = getArticleBySlug(a);
    const articleB = getArticleBySlug(b);
    const orderA = articleA?.frontmatter.order ?? 999;
    const orderB = articleB?.frontmatter.order ?? 999;
    return orderA - orderB;
  });

  const currentIndex = sortedSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? sortedSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < sortedSlugs.length - 1 ? sortedSlugs[currentIndex + 1] : null;
  const prevArticle = prevSlug ? getArticleBySlug(prevSlug) : null;
  const nextArticle = nextSlug ? getArticleBySlug(nextSlug) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              href="/knowledge-base"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Knowledge Base
            </Link>

            {/* Article header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline">
                  {categoryLabels[article.frontmatter.category] || article.frontmatter.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={difficultyColors[article.frontmatter.difficulty]}
                >
                  {article.frontmatter.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.frontmatter.estimatedReadTime} min read
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {article.frontmatter.title}
              </h1>

              <p className="text-lg text-muted-foreground">
                {article.frontmatter.description}
              </p>

              {article.frontmatter.prerequisites && article.frontmatter.prerequisites.length > 0 && (
                <div className="mt-4 p-4 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <BookOpen className="h-4 w-4" />
                    Prerequisites
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.frontmatter.prerequisites.map((prereq) => (
                      <Link key={prereq} href={`/knowledge-base/${prereq}`}>
                        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                          {prereq}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </header>

            <Separator className="mb-8" />

            {/* Article content */}
            <article className="prose prose-invert max-w-none">
              <MDXRemote
                source={article.content}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </article>

            <Separator className="my-8" />

            {/* Navigation */}
            <nav className="grid gap-4 sm:grid-cols-2">
              {prevArticle ? (
                <Link href={`/knowledge-base/${prevSlug}`}>
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="flex items-center gap-3 p-4">
                      <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-xs text-muted-foreground">Previous</div>
                        <div className="font-medium text-foreground">
                          {prevArticle.frontmatter.title}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <div />
              )}

              {nextArticle && (
                <Link href={`/knowledge-base/${nextSlug}`}>
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="flex items-center justify-end gap-3 p-4 text-right">
                      <div>
                        <div className="text-xs text-muted-foreground">Next</div>
                        <div className="font-medium text-foreground">
                          {nextArticle.frontmatter.title}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              )}
            </nav>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Related Articles
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/knowledge-base/${related.slug}`}>
                      <Card className="h-full transition-all hover:border-primary/50">
                        <CardHeader className="pb-2">
                          <Badge variant="outline" className="w-fit text-xs">
                            {categoryLabels[related.frontmatter.category] || related.frontmatter.category}
                          </Badge>
                          <CardTitle className="text-base mt-2">
                            {related.frontmatter.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          {related.frontmatter.description.slice(0, 100)}...
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
