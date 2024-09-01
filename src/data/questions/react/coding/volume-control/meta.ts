import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'volume-control',
  title: 'Feature: Volume Control',
  description:
    'A common feature in many video or audio applications. You can control the volume with this UI.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-09-01'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/Icons.js': { code: require('./src/Icons.js').code },
  },
};
