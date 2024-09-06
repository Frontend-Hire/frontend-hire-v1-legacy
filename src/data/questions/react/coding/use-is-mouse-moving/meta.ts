import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-is-mouse-moving',
  title: 'Hooks: useIsMouseMoving',
  description:
    'Create a custom hook that tracks the mouse movement. The hook should return a boolean value indicating whether the mouse is moving. The hook should also provide the x and y coordinates of the mouse and update them on mouse move.',
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
    '/useIsMouseMoving.js': { code: require('./src/useIsMouseMoving.js').code },
  },
};
