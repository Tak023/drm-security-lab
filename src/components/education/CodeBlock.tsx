'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = 'text',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = children.split('\n');

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-border bg-[oklch(0.1_0.02_260)]">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-border bg-[oklch(0.12_0.02_260)] px-4 py-2">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm font-medium text-foreground">
                {filename}
              </span>
            )}
            {!filename && language && (
              <span className="text-xs text-muted-foreground uppercase">
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-success" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      )}

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed">
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="select-none pr-4 text-right text-muted-foreground/50">
                        {i + 1}
                      </td>
                      <td className="whitespace-pre text-foreground">{line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span className="text-foreground">{children}</span>
            )}
          </code>
        </pre>
      </div>

      {/* Copy button for headerless blocks */}
      {!filename && !language && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 h-7 w-7 p-0 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-success" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      )}
    </div>
  );
}

/**
 * Inline code component
 */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  );
}
