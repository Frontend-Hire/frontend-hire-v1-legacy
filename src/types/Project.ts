export type ProjectOverview = {
  id: string;
  title: string;
  description: string;
  difficulty: PROJECT_DIFFICULTY;
  isRecommended?: boolean;
  tasks: string[];
  skills: string[];
};

export type ProjectTab = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export enum PROJECT_DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  MASTER = 'master',
}

export const PROJECT_DIFFICULTY_ORDER = {
  [PROJECT_DIFFICULTY.EASY]: 1,
  [PROJECT_DIFFICULTY.MEDIUM]: 2,
  [PROJECT_DIFFICULTY.HARD]: 3,
  [PROJECT_DIFFICULTY.MASTER]: 4,
};

export type ProjectDifficulty = PROJECT_DIFFICULTY;
