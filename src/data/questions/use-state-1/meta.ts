import { DIFFICULTY, QuestionMeta } from '@/types/Question';

export const meta: QuestionMeta = {
  id: 'use-state-1',
  title: 'useState - 1',
  description: 'State in React begins here',
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-01'),
  difficulty: DIFFICULTY.EASY,
  showPreview: true,
  showConsole: true,
  isNew: true,
  files: {
    'App.js': { code: require('./src/App.js').code },
    'AddTask.js': { code: require('./src/AddTask.js').code, readOnly: true },
    'Task.js': { code: require('./src/Task.js').code, readOnly: true },
  },
};
