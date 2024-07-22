import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'design-system-buttons-1',
  title: 'Design System: Buttons - 1',
  description:
    'You would learn to build a modern reusable button component in React. We cover the same libraries used to also power ShadCN and other design systems.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  dependencies: {
    'class-variance-authority': '0.7.0',
    'tailwind-merge': '1.14.0',
    clsx: '2.0.0',
  },
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-18'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  isFree: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/Button.js': { code: require('./src/Button.js').code },
    '/Button.module.css': { code: require('./src/Button.module.css.js').code },
    '/utils.js': { code: require('./src/utils.js').code, readOnly: true },
  },
};
