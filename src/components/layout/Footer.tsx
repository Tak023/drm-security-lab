import Link from "next/link";
import { Shield, Scale, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-foreground">DRM Security Lab</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              An educational platform for understanding Digital Rights Management security concepts, attack vectors, and defense mechanisms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/knowledge-base" className="text-muted-foreground hover:text-foreground transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Labs
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-muted-foreground hover:text-foreground transition-colors">
                  CTF Challenges
                </Link>
              </li>
              <li>
                <Link href="/diagrams" className="text-muted-foreground hover:text-foreground transition-colors">
                  System Diagrams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Legal & Ethics</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Scale className="h-4 w-4" />
                <span>Educational use only</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Not for circumvention</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Built for educational and research purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
