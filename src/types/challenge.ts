/**
 * DRM Security Lab - Challenge & CTF Type Definitions
 */

import type { DifficultyLevel, Perspective } from './content';

// Challenge categories
export type ChallengeCategory =
  | 'encryption'
  | 'key-exchange'
  | 'license-analysis'
  | 'protocol-analysis'
  | 'defense-bypass'
  | 'forensics'
  | 'watermarking'
  | 'reverse-engineering';

// Challenge status
export type ChallengeStatus = 'locked' | 'available' | 'in-progress' | 'completed' | 'failed';

/**
 * Challenge definition
 */
export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: ChallengeCategory;
  difficulty: DifficultyLevel;
  points: number;
  timeLimit?: number; // minutes, optional
  flagFormat: string; // e.g., "DRM{...}"
  flagHash: string; // SHA-256 hash of the flag
  hints: Hint[];
  prerequisites: string[]; // challenge IDs that must be completed first
  learningObjectives: string[];
  setupInstructions: string;
  solutionExplanation: string; // shown after completion
  perspective: Perspective;
  resources?: ChallengeResource[];
  files?: ChallengeFile[];
}

/**
 * Hint for a challenge
 */
export interface Hint {
  id: string;
  order: number;
  text: string;
  pointCost: number; // points deducted for using hint
  unlockAfterMinutes?: number; // auto-unlock after time
}

/**
 * Resource provided for a challenge
 */
export interface ChallengeResource {
  name: string;
  type: 'documentation' | 'tool' | 'reference' | 'example';
  url?: string;
  content?: string;
}

/**
 * File attachment for a challenge
 */
export interface ChallengeFile {
  name: string;
  type: string;
  size: number;
  content: string; // base64 encoded or inline
  description?: string;
}

/**
 * User progress on a specific challenge
 */
export interface ChallengeProgress {
  challengeId: string;
  status: ChallengeStatus;
  attempts: number;
  hintsUsed: string[]; // hint IDs
  startedAt?: string;
  completedAt?: string;
  earnedPoints: number;
  timeSpent: number; // seconds
  lastAttemptAt?: string;
  submissions: FlagSubmission[];
}

/**
 * Flag submission attempt
 */
export interface FlagSubmission {
  id: string;
  timestamp: string;
  flag: string; // hashed
  correct: boolean;
  feedback?: string;
}

/**
 * Challenge validation result
 */
export interface ValidationResult {
  correct: boolean;
  message: string;
  pointsAwarded?: number;
  hintsRevealed?: string[];
  nextChallengeUnlocked?: string;
}

/**
 * Challenge environment state
 */
export interface ChallengeEnvironment {
  challengeId: string;
  initialized: boolean;
  variables: Record<string, unknown>;
  terminalOutput: string[];
  fileSystem: VirtualFileSystem;
  networkCaptures?: NetworkCapture[];
}

/**
 * Virtual file system for challenges
 */
export interface VirtualFileSystem {
  root: VirtualDirectory;
}

/**
 * Virtual directory
 */
export interface VirtualDirectory {
  name: string;
  type: 'directory';
  children: (VirtualDirectory | VirtualFile)[];
}

/**
 * Virtual file
 */
export interface VirtualFile {
  name: string;
  type: 'file';
  content: string;
  size: number;
  permissions: string;
  hidden?: boolean;
}

/**
 * Network capture for protocol challenges
 */
export interface NetworkCapture {
  id: string;
  timestamp: number;
  source: string;
  destination: string;
  protocol: string;
  data: string; // base64 or hex
  encrypted: boolean;
  annotations?: string[];
}

/**
 * Leaderboard entry
 */
export interface LeaderboardEntry {
  rank: number;
  username: string;
  totalPoints: number;
  challengesCompleted: number;
  averageTime: number; // seconds
  streakDays: number;
  badges: string[];
}

/**
 * Challenge series (grouped challenges)
 */
export interface ChallengeSeries {
  id: string;
  title: string;
  description: string;
  challenges: string[]; // challenge IDs in order
  totalPoints: number;
  difficulty: DifficultyLevel;
  estimatedDuration: number; // minutes
  unlockRequirements?: string[]; // prerequisite series
}

/**
 * CTF event (timed competition)
 */
export interface CTFEvent {
  id: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  challenges: string[];
  rules: string[];
  prizes?: string[];
  active: boolean;
}

/**
 * Scoring configuration
 */
export interface ScoringConfig {
  basePoints: Record<DifficultyLevel, number>;
  hintPenalty: number; // percentage
  timeBonusEnabled: boolean;
  timeBonusMax: number; // percentage
  firstBloodBonus: number; // points
  streakMultiplier: number;
}

/**
 * Default scoring configuration
 */
export const DEFAULT_SCORING: ScoringConfig = {
  basePoints: {
    beginner: 100,
    intermediate: 250,
    advanced: 500,
    expert: 1000,
  },
  hintPenalty: 0.1, // 10% per hint
  timeBonusEnabled: true,
  timeBonusMax: 0.25, // 25% max time bonus
  firstBloodBonus: 50,
  streakMultiplier: 1.1, // 10% bonus per streak day
};
