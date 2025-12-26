'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PerspectiveIndicator } from './PerspectiveToggle';
import {
  BookOpen,
  FlaskConical,
  Trophy,
  Shield,
  Sword,
  Network,
  Lock,
  Key,
  Eye,
  FileText,
  Fingerprint,
  AlertTriangle,
  ChevronRight,
  GitBranch,
} from 'lucide-react';
import type { NavigationItem } from '@/types';

interface SidebarProps {
  className?: string;
}

const knowledgeBaseItems: NavigationItem[] = [
  { id: 'overview', label: 'DRM Overview', href: '/knowledge-base/overview', icon: 'BookOpen' },
  { id: 'widevine', label: 'Widevine', href: '/knowledge-base/widevine', icon: 'Shield' },
  { id: 'fairplay', label: 'FairPlay', href: '/knowledge-base/fairplay', icon: 'Shield' },
  { id: 'playready', label: 'PlayReady', href: '/knowledge-base/playready', icon: 'Shield' },
  { id: 'encryption', label: 'Encryption Basics', href: '/knowledge-base/encryption', icon: 'Lock' },
  { id: 'protocols', label: 'License Protocols', href: '/knowledge-base/protocols', icon: 'Network' },
];

const labItems: NavigationItem[] = [
  { id: 'license-server', label: 'License Server', href: '/labs/license-server', icon: 'Network' },
  { id: 'key-exchange', label: 'Key Exchange', href: '/labs/key-exchange', icon: 'Key' },
  { id: 'encryption', label: 'Encryption Lab', href: '/labs/encryption', icon: 'Lock' },
  { id: 'cdm-simulator', label: 'CDM Simulator', href: '/labs/cdm-simulator', icon: 'Shield' },
];

const attackItems: NavigationItem[] = [
  { id: 'cdm-extraction', label: 'CDM Extraction', href: '/labs/attacks/cdm-extraction', icon: 'Sword' },
  { id: 'key-sharing', label: 'Key Sharing', href: '/labs/attacks/key-sharing', icon: 'Key' },
  { id: 'mitm', label: 'MITM Attack', href: '/labs/attacks/mitm', icon: 'Network' },
  { id: 'hdcp-bypass', label: 'HDCP Bypass', href: '/labs/attacks/hdcp-bypass', icon: 'Eye' },
];

const defenseItems: NavigationItem[] = [
  { id: 'attestation', label: 'Device Attestation', href: '/labs/defense/attestation', icon: 'Fingerprint' },
  { id: 'watermarking', label: 'Watermarking', href: '/labs/defense/watermarking', icon: 'FileText' },
  { id: 'anomaly', label: 'Anomaly Detection', href: '/labs/defense/anomaly', icon: 'AlertTriangle' },
];

const iconMap: Record<string, typeof Shield> = {
  BookOpen,
  Shield,
  Lock,
  Network,
  Key,
  Sword,
  Eye,
  FileText,
  Fingerprint,
  AlertTriangle,
  GitBranch,
  FlaskConical,
  Trophy,
};

interface NavSectionProps {
  title: string;
  items: NavigationItem[];
  basePath?: string;
  badge?: string | number;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

function NavSection({ title, items, badge, badgeVariant = 'secondary' }: NavSectionProps) {
  const pathname = usePathname();

  return (
    <div className="py-2">
      <div className="mb-1 flex items-center justify-between px-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
        {badge !== undefined && (
          <Badge variant={badgeVariant} className="text-xs">
            {badge}
          </Badge>
        )}
      </div>
      <div className="space-y-0.5">
        {items.map((item) => {
          const Icon = iconMap[item.icon || 'BookOpen'] || BookOpen;
          const isActive = pathname === item.href;

          return (
            <Link key={item.id} href={item.href}>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                size="sm"
                className="w-full justify-start gap-2 px-3 font-normal"
                disabled={item.disabled}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1 truncate text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="outline" className="ml-auto text-xs">
                    {item.badge}
                  </Badge>
                )}
                {isActive && <ChevronRight className="h-3 w-3 text-muted-foreground" />}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();

  // Determine which section we're in
  const isKnowledgeBase = pathname.startsWith('/knowledge-base');
  const isLabs = pathname.startsWith('/labs');
  const isChallenges = pathname.startsWith('/challenges');

  return (
    <aside
      className={`flex w-64 flex-col border-r border-border bg-sidebar ${className}`}
    >
      <div className="p-4">
        <PerspectiveIndicator className="w-full justify-center" />
      </div>

      <Separator />

      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Always show main navigation */}
          <NavSection
            title="Learn"
            items={[
              { id: 'kb', label: 'Knowledge Base', href: '/knowledge-base', icon: 'BookOpen' },
              { id: 'diagrams', label: 'Diagrams', href: '/diagrams', icon: 'GitBranch' },
              { id: 'labs', label: 'Labs', href: '/labs', icon: 'FlaskConical' },
              { id: 'challenges', label: 'Challenges', href: '/challenges', icon: 'Trophy' },
            ]}
          />

          <Separator className="my-2" />

          {/* Context-sensitive navigation */}
          {isKnowledgeBase && (
            <NavSection title="Topics" items={knowledgeBaseItems} />
          )}

          {isLabs && (
            <>
              <NavSection title="Simulations" items={labItems} />
              <Separator className="my-2" />
              <NavSection
                title="Attack Scenarios"
                items={attackItems}
                badge="Red"
                badgeVariant="destructive"
              />
              <Separator className="my-2" />
              <NavSection
                title="Defense Lab"
                items={defenseItems}
                badge="Blue"
              />
            </>
          )}

          {isChallenges && (
            <NavSection
              title="Categories"
              items={[
                { id: 'all', label: 'All Challenges', href: '/challenges', icon: 'Trophy' },
                { id: 'encryption', label: 'Encryption', href: '/challenges?category=encryption', icon: 'Lock' },
                { id: 'protocols', label: 'Protocols', href: '/challenges?category=protocols', icon: 'Network' },
                { id: 'forensics', label: 'Forensics', href: '/challenges?category=forensics', icon: 'Eye' },
              ]}
            />
          )}
        </div>
      </ScrollArea>

      <Separator />

      <div className="p-4">
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-2 text-sm">
            <FlaskConical className="h-4 w-4 text-primary" />
            <span className="font-medium">Quick Start</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            New here? Start with the DRM Overview to understand the basics.
          </p>
          <Link href="/knowledge-base/overview">
            <Button size="sm" variant="secondary" className="mt-2 w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
