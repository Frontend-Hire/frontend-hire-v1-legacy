import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export type Meta = {
  title: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'master';
  template: SandpackPredefinedTemplate;
  externalCDNs?: string[];
  showPreview?: boolean;
  showConsole?: boolean;
  showTests?: boolean;
  description?: string;
  expectedOutput?: string;
  files?: SandpackFiles;
  submittedBy?: string;
};

declare module '*.mdx' {
  export const meta: Meta;
}
