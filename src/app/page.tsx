'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EthicsDisclaimer } from '@/components/education/EthicsDisclaimer';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PerspectiveToggle } from '@/components/layout/PerspectiveToggle';
import {
  Shield,
  Sword,
  BookOpen,
  FlaskConical,
  Trophy,
  Lock,
  Key,
  Network,
  ArrowRight,
  Play,
  Eye,
} from 'lucide-react';

const features = [
  {
    title: 'Knowledge Base',
    description:
      'Comprehensive educational content covering Widevine, FairPlay, PlayReady, encryption protocols, and license management.',
    icon: BookOpen,
    href: '/knowledge-base',
    color: 'text-primary',
  },
  {
    title: 'Interactive Labs',
    description:
      'Hands-on simulations of license servers, key exchange protocols, encryption workflows, and CDM behavior.',
    icon: FlaskConical,
    href: '/labs',
    color: 'text-success',
  },
  {
    title: 'CTF Challenges',
    description:
      'Test your understanding with capture-the-flag style challenges covering encryption, protocols, and forensics.',
    icon: Trophy,
    href: '/challenges',
    color: 'text-warning',
  },
];

const perspectives = [
  {
    title: 'Red Team',
    subtitle: 'Attacker Perspective',
    description:
      'Understand attack vectors, vulnerabilities, and how hackers attempt to circumvent DRM protections.',
    icon: Sword,
    color: 'text-red-team',
    bgColor: 'bg-red-team/10',
    borderColor: 'border-red-team/30',
  },
  {
    title: 'Blue Team',
    subtitle: 'Defender Perspective',
    description:
      'Learn defense mechanisms, detection techniques, and how to build resilient content protection systems.',
    icon: Shield,
    color: 'text-blue-team',
    bgColor: 'bg-blue-team/10',
    borderColor: 'border-blue-team/30',
  },
];

const drmSystems = [
  { name: 'Widevine', vendor: 'Google', platforms: 'Android, Chrome, Smart TVs' },
  { name: 'FairPlay', vendor: 'Apple', platforms: 'iOS, macOS, Safari' },
  { name: 'PlayReady', vendor: 'Microsoft', platforms: 'Windows, Xbox, Smart TVs' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-red-team/5" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">
                Educational Security Research Platform
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-primary">DRM</span> Security Lab
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Master Digital Rights Management security through interactive
                learning. Explore attack vectors as a{' '}
                <span className="font-semibold text-red-team">Red Team</span>{' '}
                attacker, then defend as a{' '}
                <span className="font-semibold text-blue-team">Blue Team</span>{' '}
                security engineer.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/knowledge-base">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" />
                    Start Learning
                  </Button>
                </Link>
                <Link href="/labs">
                  <Button size="lg" variant="outline" className="gap-2">
                    <FlaskConical className="h-4 w-4" />
                    Explore Labs
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex justify-center">
                <PerspectiveToggle showLabel size="default" />
              </div>
            </div>
          </div>
        </section>

        {/* Ethics Disclaimer */}
        <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <EthicsDisclaimer variant="banner" dismissible />
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Learn DRM Security
            </h2>
            <p className="mt-2 text-muted-foreground">
              Three pillars of understanding: Learn, Practice, Challenge
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${feature.color}`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-primary">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Perspective Section */}
        <section className="border-y border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Dual Perspective Learning
              </h2>
              <p className="mt-2 text-muted-foreground">
                Switch between attacker and defender viewpoints to understand both sides
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {perspectives.map((perspective) => (
                <Card
                  key={perspective.title}
                  className={`${perspective.bgColor} ${perspective.borderColor} border-2`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${perspective.bgColor} ${perspective.color}`}
                      >
                        <perspective.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className={perspective.color}>
                          {perspective.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {perspective.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {perspective.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DRM Systems Overview */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              DRM Systems Covered
            </h2>
            <p className="mt-2 text-muted-foreground">
              Deep dives into the major streaming DRM technologies
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {drmSystems.map((system) => (
              <Card key={system.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{system.name}</CardTitle>
                  <CardDescription>{system.vendor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {system.platforms}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Topics Preview */}
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Badge variant="destructive" className="mb-4">
                  <Sword className="mr-1 h-3 w-3" /> Attack Topics
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">
                  Understand the Threats
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'CDM Extraction Techniques',
                    'Key Sharing & Distribution',
                    'Man-in-the-Middle Attacks',
                    'HDCP Bypass Methods',
                    'Replay Attack Vectors',
                  ].map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Eye className="h-4 w-4 text-red-team" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Badge className="mb-4">
                  <Shield className="mr-1 h-3 w-3" /> Defense Topics
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">
                  Build Robust Protection
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Device Attestation',
                    'Forensic Watermarking',
                    'Anomaly Detection Systems',
                    'License Policy Design',
                    'Secure Video Path',
                  ].map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Key className="h-4 w-4 text-blue-team" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/knowledge-base">
                <Button variant="outline" size="lg" className="gap-2">
                  <Network className="h-4 w-4" />
                  Explore All Topics
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
