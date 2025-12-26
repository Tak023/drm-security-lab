/**
 * DRM Security Lab - Content & Educational Type Definitions
 */

// User perspective in the lab
export type Perspective = 'red-team' | 'blue-team' | 'neutral';

// Difficulty levels for content and challenges
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Content types in the knowledge base
export type ContentType = 'article' | 'tutorial' | 'lab' | 'challenge' | 'reference';

// Article categories
export type ArticleCategory =
  | 'fundamentals'
  | 'drm-systems'
  | 'encryption'
  | 'attack-vectors'
  | 'defense-mechanisms'
  | 'case-studies'
  | 'protocols';

/**
 * Knowledge base article
 */
export interface KnowledgeBaseArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  difficulty: DifficultyLevel;
  estimatedReadTime: number; // minutes
  prerequisites: string[];
  tags: string[];
  content: string; // MDX content path or inline
  lastUpdated: string;
  relatedArticles: string[];
  perspective?: Perspective; // if content is perspective-specific
}

/**
 * Table of contents entry
 */
export interface TOCEntry {
  id: string;
  title: string;
  level: number;
  children?: TOCEntry[];
}

/**
 * Glossary term
 */
export interface GlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  examples?: string[];
}

/**
 * Diagram data for React Flow
 */
export interface DiagramData {
  id: string;
  title: string;
  description: string;
  category: 'flow' | 'architecture' | 'attack' | 'defense' | 'comparison';
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  annotations: DiagramAnnotation[];
}

/**
 * Diagram node
 */
export interface DiagramNode {
  id: string;
  type: 'actor' | 'process' | 'data' | 'decision' | 'vulnerability' | 'defense';
  label: string;
  description?: string;
  position: { x: number; y: number };
  style?: Record<string, string>;
  metadata?: Record<string, unknown>;
  perspective?: Perspective;
}

/**
 * Diagram edge (connection)
 */
export interface DiagramEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
  style?: Record<string, string>;
  type?: 'default' | 'step' | 'smoothstep' | 'straight';
  markerEnd?: string;
}

/**
 * Annotation on diagram
 */
export interface DiagramAnnotation {
  id: string;
  perspective: Perspective;
  text: string;
  targetNodeId: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  severity?: 'info' | 'warning' | 'critical';
}

/**
 * Learning path definition
 */
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedDuration: number; // minutes
  modules: LearningModule[];
  prerequisites: string[];
  outcomes: string[];
}

/**
 * Learning module within a path
 */
export interface LearningModule {
  id: string;
  title: string;
  type: ContentType;
  contentId: string; // reference to article, lab, or challenge
  order: number;
  required: boolean;
}

/**
 * User progress tracking
 */
export interface UserProgress {
  articlesRead: string[];
  labsCompleted: string[];
  challengesCompleted: string[];
  totalPoints: number;
  currentPerspective: Perspective;
  lastActivityAt: string;
  streakDays: number;
  achievements: Achievement[];
}

/**
 * Achievement/badge
 */
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: 'learning' | 'challenge' | 'streak' | 'exploration';
}

/**
 * Lab session state
 */
export interface LabSession {
  id: string;
  labId: string;
  startedAt: string;
  completedAt?: string;
  currentStep: number;
  totalSteps: number;
  perspective: Perspective;
  logs: LabLog[];
  variables: Record<string, unknown>;
}

/**
 * Log entry in lab session
 */
export interface LabLog {
  timestamp: number;
  level: 'info' | 'warning' | 'error' | 'success' | 'debug';
  message: string;
  details?: Record<string, unknown>;
  actor?: string;
}

/**
 * Simulation state
 */
export interface SimulationState {
  id: string;
  type: 'license-flow' | 'key-exchange' | 'encryption' | 'attack' | 'defense';
  currentStep: number;
  steps: SimulationStep[];
  logs: LabLog[];
  variables: Record<string, unknown>;
  isPlaying: boolean;
  speed: number; // 1 = normal, 2 = fast, 0.5 = slow
}

/**
 * Step in a simulation
 */
export interface SimulationStep {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'active' | 'completed' | 'error' | 'skipped';
  actor: string;
  action: string;
  data?: Record<string, unknown>;
  duration?: number; // ms for animation
  annotations?: {
    redTeam?: string;
    blueTeam?: string;
  };
}

/**
 * Navigation item for sidebar
 */
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  children?: NavigationItem[];
  disabled?: boolean;
  external?: boolean;
}

/**
 * Search result
 */
export interface SearchResult {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  url: string;
  category: string;
  relevance: number;
  highlights?: string[];
}
