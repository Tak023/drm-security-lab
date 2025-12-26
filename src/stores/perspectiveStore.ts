/**
 * Perspective Store - Zustand store for Red/Blue team perspective
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Perspective } from '@/types';

interface PerspectiveState {
  perspective: Perspective;
  setPerspective: (perspective: Perspective) => void;
  togglePerspective: () => void;
  isRedTeam: () => boolean;
  isBlueTeam: () => boolean;
}

export const usePerspectiveStore = create<PerspectiveState>()(
  persist(
    (set, get) => ({
      perspective: 'neutral',

      setPerspective: (perspective: Perspective) => set({ perspective }),

      togglePerspective: () =>
        set((state) => ({
          perspective:
            state.perspective === 'red-team'
              ? 'blue-team'
              : state.perspective === 'blue-team'
                ? 'neutral'
                : 'red-team',
        })),

      isRedTeam: () => get().perspective === 'red-team',
      isBlueTeam: () => get().perspective === 'blue-team',
    }),
    {
      name: 'drm-lab-perspective',
    }
  )
);
