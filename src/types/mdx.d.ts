import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export type Meta = {
  title: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'master';
  template: SandpackPredefinedTemplate;
  description?: string;
  expectedOutput?: string;
  files?: SandpackFiles;
};

declare module '*.mdx' {
  export const meta: Meta;
}
