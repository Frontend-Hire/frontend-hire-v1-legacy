import { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react';

// This is updated everytime a new skill is supported!
export type Skill = 'html' | 'css' | 'javascript';

const CONFIG_MAP: {
  [key in Skill]: {
    template: SandpackPredefinedTemplate;
    isConsoleShown?: boolean;
    isTestsShown?: boolean;
  };
} = {
  html: { template: 'static' },
  css: { template: 'static' },
  javascript: { template: 'vanilla', isConsoleShown: true, isTestsShown: true },
};

export function getQuestionConfig(skill: Skill) {
  return CONFIG_MAP[skill];
}
