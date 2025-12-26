"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Achievement {
  id: string;
  name: string;
  description: string;
  unlockedAt?: string;
}

interface ProgressState {
  articlesRead: string[];
  labsCompleted: string[];
  challengesCompleted: string[];
  totalPoints: number;
  currentPerspective: "red-team" | "neutral" | "blue-team";
  lastActivityAt: string;
  streakDays: number;
  achievements: Achievement[];

  // Actions
  markArticleRead: (articleId: string) => void;
  isArticleRead: (articleId: string) => boolean;
  markLabCompleted: (labId: string) => void;
  isLabCompleted: (labId: string) => boolean;
  markChallengeCompleted: (challengeId: string, points: number) => void;
  isChallengeCompleted: (challengeId: string) => boolean;
  addPoints: (points: number) => void;
  unlockAchievement: (achievement: Achievement) => void;
  hasAchievement: (achievementId: string) => boolean;
  resetProgress: () => void;
}

const initialProgress = {
  articlesRead: [],
  labsCompleted: [],
  challengesCompleted: [],
  totalPoints: 0,
  currentPerspective: "neutral" as const,
  lastActivityAt: new Date().toISOString(),
  streakDays: 0,
  achievements: [],
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialProgress,

      markArticleRead: (articleId) =>
        set((state) => ({
          articlesRead: state.articlesRead.includes(articleId)
            ? state.articlesRead
            : [...state.articlesRead, articleId],
          lastActivityAt: new Date().toISOString(),
        })),

      isArticleRead: (articleId) => get().articlesRead.includes(articleId),

      markLabCompleted: (labId) =>
        set((state) => ({
          labsCompleted: state.labsCompleted.includes(labId)
            ? state.labsCompleted
            : [...state.labsCompleted, labId],
          lastActivityAt: new Date().toISOString(),
        })),

      isLabCompleted: (labId) => get().labsCompleted.includes(labId),

      markChallengeCompleted: (challengeId, points) =>
        set((state) => ({
          challengesCompleted: state.challengesCompleted.includes(challengeId)
            ? state.challengesCompleted
            : [...state.challengesCompleted, challengeId],
          totalPoints: state.challengesCompleted.includes(challengeId)
            ? state.totalPoints
            : state.totalPoints + points,
          lastActivityAt: new Date().toISOString(),
        })),

      isChallengeCompleted: (challengeId) =>
        get().challengesCompleted.includes(challengeId),

      addPoints: (points) =>
        set((state) => ({
          totalPoints: state.totalPoints + points,
        })),

      unlockAchievement: (achievement) =>
        set((state) => ({
          achievements: state.achievements.some((a) => a.id === achievement.id)
            ? state.achievements
            : [
                ...state.achievements,
                { ...achievement, unlockedAt: new Date().toISOString() },
              ],
        })),

      hasAchievement: (achievementId) =>
        get().achievements.some((a) => a.id === achievementId),

      resetProgress: () => set(initialProgress),
    }),
    {
      name: "drm-lab-progress",
    }
  )
);
