import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { QuestionDifficulty, QuestionLayout } from './Question';
import { ProjectDifficulty } from './Project';

export type Meta = {
  title: string;
  difficulty: QuestionDifficulty;
  template: SandpackPredefinedTemplate;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  showTests?: boolean;
  questionNumber: number;
  isNew?: boolean;
  date?: string;
  description?: string;
  expectedOutput?: string;
  files: SandpackFiles;
  submittedBy?: string;
  dependencies?: { [key: string]: string };
  recommendedLayout?: QuestionLayout;
};

export type ProjectMeta = {
  title: string;
  difficulty: ProjectDifficulty;
  description?: string;
  tasks: number;
};

declare module '*.mdx' {
  export const meta: Meta;
}
