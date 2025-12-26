'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CodeBlock, InlineCode } from './CodeBlock';
import { usePerspective } from '@/providers/PerspectiveProvider';
import {
  AlertTriangle,
  Info,
  Shield,
  Sword,
  Lightbulb,
  BookOpen,
  Lock,
  Key,
  Network,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import type { ReactNode } from 'react';

// Custom MDX components
const components = {
  // Headings with anchor links
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

  // Paragraphs
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-muted-foreground leading-7 mb-4">{children}</p>
  ),

  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="leading-7">{children}</li>
  ),

  // Links
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

  // Code
  code: ({ children, className }: { children: string; className?: string }) => {
    const isInline = !className;
    if (isInline) {
      return <InlineCode>{children}</InlineCode>;
    }
    const language = className?.replace('language-', '') || 'text';
    return <CodeBlock language={language}>{children}</CodeBlock>;
  },
  pre: ({ children }: { children: ReactNode }) => <>{children}</>,

  // Blockquotes
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="my-4 border-l-4 border-primary/50 bg-primary/5 py-2 pl-4 pr-2 italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  // Tables
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

  // Horizontal rule
  hr: () => <Separator className="my-8" />,

  // Strong and emphasis
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic">{children}</em>
  ),

  // Custom components for DRM content
  InfoBox,
  WarningBox,
  RedTeamNote,
  BlueTeamNote,
  ConceptCard,
  ComparisonTable,
  KeyConcept,
  SecurityLevel,
};

// Custom callout components
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
    <Alert className="my-4 border-warning/50 bg-warning/5">
      <AlertTriangle className="h-4 w-4 text-warning" />
      {title && <AlertTitle className="text-warning">{title}</AlertTitle>}
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function RedTeamNote({ title = 'Red Team Insight', children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-red-team/50 bg-red-team/5">
      <Sword className="h-4 w-4 text-red-team" />
      <AlertTitle className="text-red-team">{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  );
}

function BlueTeamNote({ title = 'Blue Team Defense', children }: { title?: string; children: ReactNode }) {
  return (
    <Alert className="my-4 border-blue-team/50 bg-blue-team/5">
      <Shield className="h-4 w-4 text-blue-team" />
      <AlertTitle className="text-blue-team">{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
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

function KeyConcept({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="h-4 w-4 text-warning" />
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

interface ArticleRendererProps {
  source: MDXRemoteSerializeResult;
}

export function ArticleRenderer({ source }: ArticleRendererProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  );
}

export { components as mdxComponents };
