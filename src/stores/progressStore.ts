/**
 * Progress Store - Zustand store for user learning progress
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, Achievement } from '@/types';

interface ProgressState extends UserProgress {
  // Article progress
  markArticleRead: (articleId: string) => void;
  isArticleRead: (articleId: string) => boolean;

  // Lab progress
  markLabCompleted: (labId: string) => void;
  isLabCompleted: (labId: string) => boolean;

  // Challenge progress
  markChallengeCompleted: (challengeId: string, points: number) => void;
  isChallengeCompleted: (challengeId: string) => boolean;

  // Points
  addPoints: (points: number) => void;

  // Achievements
  unlockAchievement: (achievement: Achievement) => void;
  hasAchievement: (achievementId: string) => boolean;

  // Reset
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  articlesRead: [],
  labsCompleted: [],
  challengesCompleted: [],
  totalPoints: 0,
  currentPerspective: 'neutral',
  lastActivityAt: new Date().toISOString(),
  streakDays: 0,
  achievements: [],
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialProgress,

      markArticleRead: (articleId: string) =>
        set((state) => ({
          articlesRead: state.articlesRead.includes(articleId)
            ? state.articlesRead
            : [...state.articlesRead, articleId],
          lastActivityAt: new Date().toISOString(),
        })),

      isArticleRead: (articleId: string) =>
        get().articlesRead.includes(articleId),

      markLabCompleted: (labId: string) =>
        set((state) => ({
          labsCompleted: state.labsCompleted.includes(labId)
            ? state.labsCompleted
            : [...state.labsCompleted, labId],
          lastActivityAt: new Date().toISOString(),
        })),

      isLabCompleted: (labId: string) =>
        get().labsCompleted.includes(labId),

      markChallengeCompleted: (challengeId: string, points: number) =>
        set((state) => ({
          challengesCompleted: state.challengesCompleted.includes(challengeId)
            ? state.challengesCompleted
            : [...state.challengesCompleted, challengeId],
          totalPoints: state.challengesCompleted.includes(challengeId)
            ? state.totalPoints
            : state.totalPoints + points,
          lastActivityAt: new Date().toISOString(),
        })),

      isChallengeCompleted: (challengeId: string) =>
        get().challengesCompleted.includes(challengeId),

      addPoints: (points: number) =>
        set((state) => ({
          totalPoints: state.totalPoints + points,
        })),

      unlockAchievement: (achievement: Achievement) =>
        set((state) => ({
          achievements: state.achievements.some((a) => a.id === achievement.id)
            ? state.achievements
            : [
                ...state.achievements,
                { ...achievement, unlockedAt: new Date().toISOString() },
              ],
        })),

      hasAchievement: (achievementId: string) =>
        get().achievements.some((a) => a.id === achievementId),

      resetProgress: () => set(initialProgress),
    }),
    {
      name: 'drm-lab-progress',
    }
  )
);
