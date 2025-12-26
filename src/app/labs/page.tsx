'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePerspectiveStore } from '@/stores/perspectiveStore';
import Link from 'next/link';
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
} from 'lucide-react';

const simulationLabs = [
  {
    id: 'license-server',
    title: 'License Server',
    description: 'Interact with a mock license server. Observe request/response flows.',
    icon: Network,
    status: 'available',
  },
  {
    id: 'key-exchange',
    title: 'Key Exchange',
    description: 'Visualize Diffie-Hellman and RSA key exchange protocols.',
    icon: Key,
    status: 'available',
  },
  {
    id: 'encryption',
    title: 'Encryption Lab',
    description: 'Encrypt and decrypt content using AES-CTR and AES-CBC modes.',
    icon: Lock,
    status: 'available',
  },
  {
    id: 'cdm-simulator',
    title: 'CDM Simulator',
    description: 'Simulate Content Decryption Module behavior at different security levels.',
    icon: Shield,
    status: 'available',
  },
];

const attackLabs = [
  {
    id: 'cdm-extraction',
    title: 'CDM Extraction',
    description: 'Understand how software CDMs can be reverse-engineered (conceptual).',
    icon: Sword,
    status: 'available',
  },
  {
    id: 'key-sharing',
    title: 'Key Sharing',
    description: 'Learn about license portability and session binding weaknesses.',
    icon: Key,
    status: 'available',
  },
  {
    id: 'mitm',
    title: 'MITM Attack',
    description: 'Visualize man-in-the-middle attacks on license flows.',
    icon: Eye,
    status: 'available',
  },
  {
    id: 'hdcp-bypass',
    title: 'HDCP Bypass',
    description: 'Explore output protection and hardware trust chains.',
    icon: AlertTriangle,
    status: 'available',
  },
];

const defenseLabs = [
  {
    id: 'attestation',
    title: 'Device Attestation',
    description: 'Simulate device attestation and trust establishment.',
    icon: Fingerprint,
    status: 'available',
  },
  {
    id: 'watermarking',
    title: 'Forensic Watermarking',
    description: 'Visualize A/B segment watermarking for content tracing.',
    icon: FileText,
    status: 'available',
  },
  {
    id: 'anomaly',
    title: 'Anomaly Detection',
    description: 'Simulate real-time detection of suspicious access patterns.',
    icon: AlertTriangle,
    status: 'available',
  },
];

interface LabCardProps {
  lab: {
    id: string;
    title: string;
    description: string;
    icon: typeof Network;
    status: string;
  };
  category: 'simulation' | 'attack' | 'defense';
}

function LabCard({ lab, category }: LabCardProps) {
  const href =
    category === 'attack'
      ? `/labs/attacks/${lab.id}`
      : category === 'defense'
        ? `/labs/defense/${lab.id}`
        : `/labs/${lab.id}`;

  const isComingSoon = lab.status === 'coming-soon';

  const categoryColors = {
    simulation: 'text-primary',
    attack: 'text-red-team',
    defense: 'text-blue-team',
  };

  const content = (
    <Card
      className={`h-full transition-all ${
        isComingSoon
          ? 'opacity-60'
          : 'hover:border-primary/50 hover:shadow-lg cursor-pointer'
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ${categoryColors[category]}`}
          >
            <lab.icon className="h-5 w-5" />
          </div>
          {isComingSoon && (
            <Badge variant="outline" className="text-xs">
              Coming Soon
            </Badge>
          )}
        </div>
        <CardTitle className="mt-4">{lab.title}</CardTitle>
        <CardDescription>{lab.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!isComingSoon && (
          <div className="flex items-center text-sm text-primary">
            Open Lab <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (isComingSoon) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

export default function LabsPage() {
  const perspective = usePerspectiveStore((state) => state.perspective);

  const defaultTab =
    perspective === 'red-team'
      ? 'attacks'
      : perspective === 'blue-team'
        ? 'defense'
        : 'simulations';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <FlaskConical className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Interactive Labs
                  </h1>
                  <p className="text-muted-foreground">
                    Hands-on simulations of DRM systems, attacks, and defenses
                  </p>
                </div>
              </div>
            </div>

            <Tabs defaultValue={defaultTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="simulations" className="gap-2">
                  <Network className="h-4 w-4" />
                  Simulations
                </TabsTrigger>
                <TabsTrigger value="attacks" className="gap-2">
                  <Sword className="h-4 w-4 text-red-team" />
                  Attack Scenarios
                </TabsTrigger>
                <TabsTrigger value="defense" className="gap-2">
                  <Shield className="h-4 w-4 text-blue-team" />
                  Defense Lab
                </TabsTrigger>
              </TabsList>

              <TabsContent value="simulations" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {simulationLabs.map((lab) => (
                    <LabCard key={lab.id} lab={lab} category="simulation" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="attacks" className="mt-6">
                <div className="mb-4 rounded-lg border border-red-team/30 bg-red-team/5 p-4">
                  <div className="flex items-center gap-2 text-red-team">
                    <Sword className="h-5 w-5" />
                    <span className="font-semibold">Red Team Perspective</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    These labs demonstrate attack concepts for educational purposes.
                    Understanding attacks helps build better defenses.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {attackLabs.map((lab) => (
                    <LabCard key={lab.id} lab={lab} category="attack" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="defense" className="mt-6">
                <div className="mb-4 rounded-lg border border-blue-team/30 bg-blue-team/5 p-4">
                  <div className="flex items-center gap-2 text-blue-team">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">Blue Team Perspective</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn how to implement and configure defense mechanisms to
                    protect content and detect malicious activity.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {defenseLabs.map((lab) => (
                    <LabCard key={lab.id} lab={lab} category="defense" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
