import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export enum QUESTION_SKILL {
  REACT = 'react',
}

export enum QUESTION_TYPE {
  CODING = 'coding',
  THEORY = 'theory',
}

export type BaseQuestion = {
  id: string;
  title: string;
  description: string;
  difficulty: DIFFICULTY;
  publishedOn: Date;
  isNew?: boolean;
  isFree?: boolean;
};

export type CodingQuestion = BaseQuestion & {
  type: QUESTION_TYPE.CODING;
  recommendedLayout: QuestionLayout;
  template: SandpackPredefinedTemplate;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  files: SandpackFiles;
  dependencies?: { [key: string]: string };
};

export type TheoryQuestion = BaseQuestion & {
  type: QUESTION_TYPE.THEORY;
};

export type Question = CodingQuestion | TheoryQuestion;

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
