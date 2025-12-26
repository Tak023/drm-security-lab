'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { LicenseServerLab } from '@/components/labs/LicenseServerLab';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Server } from 'lucide-react';

export default function LicenseServerLabPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
            {/* Back link */}
            <Link
              href="/labs"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Labs
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">License Server Lab</h1>
                  <p className="text-muted-foreground">
                    Interactive DRM license server and CDM simulation
                  </p>
                </div>
                <Badge variant="outline" className="ml-auto bg-green-500/10 text-green-500 border-green-500/30">
                  Interactive
                </Badge>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-6 p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">How to Use This Lab</h3>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal ml-4">
                <li>Select a security level (L1, L2, or L3) to simulate different CDM implementations</li>
                <li>Click "Create Session" to initialize a license session with key IDs</li>
                <li>Click "Request License" to send a challenge to the mock server and receive keys</li>
                <li>Click "Decrypt Content" to use the keys for content decryption</li>
                <li>Try the "Simulate Attack" to see how L3 devices are vulnerable to memory dumps</li>
              </ol>
            </div>

            {/* Lab Component */}
            <LicenseServerLab />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
