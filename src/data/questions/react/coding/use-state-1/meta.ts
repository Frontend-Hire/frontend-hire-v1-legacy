import { DIFFICULTY, Question, QUESTION_TYPE } from '@/types/Question';

export const meta: Question = {
  id: 'use-state-1',
  title: 'useState - 1',
  description:
    'This question revolves around the most frequently used hook in React development. Your task is to implement the logic for managing tasks - including storing, adding, and deleting them within a local state variable.',
  type: QUESTION_TYPE.CODING,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-01'),
  difficulty: DIFFICULTY.EASY,
  showPreview: true,
  showConsole: true,
  isFree: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/AddTask.js': { code: require('./src/AddTask.js').code, readOnly: true },
    '/Task.js': { code: require('./src/Task.js').code, readOnly: true },
  },
};
