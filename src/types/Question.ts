import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export const QUESTION_SKILL = {
  WEB: 'web',
  CSS: 'css',
  JAVASCRIPT: 'javascript',
  REACT: 'react',
  NEXT: 'next',
} as const;

export type QuestionSkill =
  (typeof QUESTION_SKILL)[keyof typeof QUESTION_SKILL];

export const QUESTION_TYPE = {
  CODING: 'coding',
  THEORY: 'theory',
} as const;

export type QuestionType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];

export const CODING_ENVIRONMENT_TYPE = {
  BROWSER: 'browser',
  LOCAL: 'local',
} as const;

export type CodingEnvironmentType =
  (typeof CODING_ENVIRONMENT_TYPE)[keyof typeof CODING_ENVIRONMENT_TYPE];

export const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  MASTER: 'master',
} as const;

export type Difficulty = (typeof DIFFICULTY)[keyof typeof DIFFICULTY];

export const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  [DIFFICULTY.EASY]: 1,
  [DIFFICULTY.MEDIUM]: 2,
  [DIFFICULTY.HARD]: 3,
  [DIFFICULTY.MASTER]: 4,
};

export type BaseQuestion = {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  publishedOn: Date;
  isFree?: boolean;
};

export type BrowserCodingQuestion = BaseQuestion & {
  type: typeof QUESTION_TYPE.CODING;
  environment: typeof CODING_ENVIRONMENT_TYPE.BROWSER;
  recommendedLayout: QuestionLayout;
  template: SandpackPredefinedTemplate;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  files: SandpackFiles;
  dependencies?: { [key: string]: string };
};

export type LocalCodingQuestion = BaseQuestion & {
  type: typeof QUESTION_TYPE.CODING;
  environment: typeof CODING_ENVIRONMENT_TYPE.LOCAL;
};

export type CodingQuestion = BrowserCodingQuestion | LocalCodingQuestion;

export type TheoryQuestion = BaseQuestion & {
  type: typeof QUESTION_TYPE.THEORY;
};

export type Question = CodingQuestion | TheoryQuestion;

export type QuestionTab = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type QuestionLayout = 'col-3' | 'col-2';
