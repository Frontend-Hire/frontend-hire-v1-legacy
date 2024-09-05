import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-hover',
  title: 'Hooks: useHover',
  description:
    'Create a custom hook that tracks the hover state of an element. The hook should return a boolean value indicating whether the element is being hovered over. If no element is provided, the hook should track the hover state of the entire document.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-09-05'),
  difficulty: DIFFICULTY.EASY,
  showPreview: true,
  showConsole: true,
  isFree: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/useHover.js': { code: require('./src/useHover.js').code },
    'App.css': { code: require('./src/App.css.js').code, readOnly: true },
  },
};
