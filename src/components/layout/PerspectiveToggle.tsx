'use client';

import { usePerspective } from '@/providers/PerspectiveProvider';
import { Button } from '@/components/ui/button';
import { Shield, Sword, Eye } from 'lucide-react';
import type { Perspective } from '@/types';

interface PerspectiveToggleProps {
  size?: 'sm' | 'default' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function PerspectiveToggle({
  size = 'default',
  showLabel = true,
  className = '',
}: PerspectiveToggleProps) {
  const { perspective, setPerspective } = usePerspective();

  const perspectives: { value: Perspective; icon: typeof Shield; label: string; color: string }[] = [
    {
      value: 'red-team',
      icon: Sword,
      label: 'Red Team',
      color: 'text-red-team hover:bg-red-team/10 data-[active=true]:bg-red-team/20 data-[active=true]:text-red-team',
    },
    {
      value: 'neutral',
      icon: Eye,
      label: 'Neutral',
      color: 'text-muted-foreground hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-foreground',
    },
    {
      value: 'blue-team',
      icon: Shield,
      label: 'Blue Team',
      color: 'text-blue-team hover:bg-blue-team/10 data-[active=true]:bg-blue-team/20 data-[active=true]:text-blue-team',
    },
  ];

  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const buttonSize = size === 'sm' ? 'h-8 px-2' : size === 'lg' ? 'h-11 px-4' : 'h-9 px-3';

  return (
    <div className={`flex items-center gap-1 rounded-lg border border-border bg-card p-1 ${className}`}>
      {perspectives.map(({ value, icon: Icon, label, color }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          data-active={perspective === value}
          className={`${buttonSize} ${color} transition-all`}
          onClick={() => setPerspective(value)}
        >
          <Icon className={iconSize} />
          {showLabel && <span className="ml-1.5 text-xs font-medium">{label}</span>}
        </Button>
      ))}
    </div>
  );
}

/**
 * Simple perspective indicator badge
 */
export function PerspectiveIndicator({ className = '' }: { className?: string }) {
  const { perspective, perspectiveLabel } = usePerspective();

  const colorClasses =
    perspective === 'red-team'
      ? 'bg-red-team/10 text-red-team border-red-team/30'
      : perspective === 'blue-team'
        ? 'bg-blue-team/10 text-blue-team border-blue-team/30'
        : 'bg-muted text-muted-foreground border-border';

  const Icon = perspective === 'red-team' ? Sword : perspective === 'blue-team' ? Shield : Eye;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${colorClasses} ${className}`}
    >
      <Icon className="h-3 w-3" />
      {perspectiveLabel}
    </div>
  );
}
