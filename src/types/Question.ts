import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export type QuestionMeta = {
  title: string;
  difficulty: QuestionDifficulty;
  template: SandpackPredefinedTemplate;
  recommendedLayout: QuestionLayout;
  publishedOn: Date;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  isNew?: boolean;
  isFree?: boolean;
  description: string;
  files: SandpackFiles;
  dependencies?: { [key: string]: string };
};

export type QuestionOverview = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  difficulty: QuestionDifficulty;
  questionNumber: number;
  isNew?: boolean;
  isFree?: boolean;
};

export type SkillQuestions = {
  [skill: string]: QuestionOverview[];
};

export type SkillStats = {
  [skill: string]: { total: number; submitted: number };
};

export type QuestionTab = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export enum DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  MASTER = 'master',
}

export const DIFFICULTY_ORDER = {
  [DIFFICULTY.EASY]: 1,
  [DIFFICULTY.MEDIUM]: 2,
  [DIFFICULTY.HARD]: 3,
  [DIFFICULTY.MASTER]: 4,
};

export type QuestionLayout = 'col-3' | 'col-2';

export type QuestionDifficulty = DIFFICULTY;
