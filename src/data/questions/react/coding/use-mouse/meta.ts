import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-mouse',
  title: 'Hooks: useMouse',
  description:
    'Create a custom hook that tracks the mouse position. The hook should return the x and y coordinates of the mouse and update them on mouse move, it should also give mouse position relative to a element.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-09-04'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  isFree: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/useMouse.js': { code: require('./src/useMouse.js').code },
    'App.css': require('./src/App.css.js').code,
  },
};
