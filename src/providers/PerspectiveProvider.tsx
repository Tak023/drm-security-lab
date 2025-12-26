'use client';

/**
 * PerspectiveProvider - Context provider for Red/Blue team perspective
 * Wraps the app to provide perspective state and utilities
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePerspectiveStore } from '@/stores/perspectiveStore';
import type { Perspective } from '@/types';

interface PerspectiveContextValue {
  perspective: Perspective;
  setPerspective: (perspective: Perspective) => void;
  togglePerspective: () => void;
  isRedTeam: boolean;
  isBlueTeam: boolean;
  isNeutral: boolean;
  perspectiveColor: string;
  perspectiveLabel: string;
}

const PerspectiveContext = createContext<PerspectiveContextValue | null>(null);

interface PerspectiveProviderProps {
  children: React.ReactNode;
}

export function PerspectiveProvider({ children }: PerspectiveProviderProps) {
  const store = usePerspectiveStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const value: PerspectiveContextValue = {
    perspective: store.perspective,
    setPerspective: store.setPerspective,
    togglePerspective: store.togglePerspective,
    isRedTeam: store.perspective === 'red-team',
    isBlueTeam: store.perspective === 'blue-team',
    isNeutral: store.perspective === 'neutral',
    perspectiveColor:
      store.perspective === 'red-team'
        ? 'var(--red-team)'
        : store.perspective === 'blue-team'
          ? 'var(--blue-team)'
          : 'var(--primary)',
    perspectiveLabel:
      store.perspective === 'red-team'
        ? 'Red Team (Attacker)'
        : store.perspective === 'blue-team'
          ? 'Blue Team (Defender)'
          : 'Neutral (Observer)',
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div data-perspective="neutral">
        {children}
      </div>
    );
  }

  return (
    <PerspectiveContext.Provider value={value}>
      <div data-perspective={store.perspective}>
        {children}
      </div>
    </PerspectiveContext.Provider>
  );
}

const defaultValue: PerspectiveContextValue = {
  perspective: 'neutral',
  setPerspective: () => {},
  togglePerspective: () => {},
  isRedTeam: false,
  isBlueTeam: false,
  isNeutral: true,
  perspectiveColor: 'var(--primary)',
  perspectiveLabel: 'Neutral (Observer)',
};

export function usePerspective() {
  const context = useContext(PerspectiveContext);
  // Return default value during SSR or if not wrapped in provider
  if (!context) {
    return defaultValue;
  }
  return context;
}

/**
 * Component that renders children only for specific perspectives
 */
interface PerspectiveGateProps {
  children: React.ReactNode;
  allowed: Perspective | Perspective[];
  fallback?: React.ReactNode;
}

export function PerspectiveGate({
  children,
  allowed,
  fallback = null,
}: PerspectiveGateProps) {
  const { perspective } = usePerspective();
  const allowedArray = Array.isArray(allowed) ? allowed : [allowed];

  if (allowedArray.includes(perspective) || allowedArray.includes('neutral')) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

/**
 * Hook to get perspective-specific content
 */
export function usePerspectiveContent<T>(content: {
  'red-team'?: T;
  'blue-team'?: T;
  neutral?: T;
  default: T;
}): T {
  const { perspective } = usePerspective();
  return content[perspective] ?? content.default;
}
