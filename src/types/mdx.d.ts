import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { QuestionDifficulty } from './Question';

export type Meta = {
  title: string;
  difficulty: QuestionDifficulty;
  template: SandpackPredefinedTemplate;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  showTests?: boolean;
  description?: string;
  expectedOutput?: string;
  files?: SandpackFiles;
  submittedBy?: string;
  dependencies?: { [key: string]: string };
};

declare module '*.mdx' {
  export const meta: Meta;
}
