import { DIFFICULTY, Question, QUESTION_TYPE } from '@/types/Question';

export const meta: Question = {
  id: 'use-effect-1',
  title: 'useEffect - 1',
  description:
    'The useEffect hook is notorious to cause majority of bugs in most React projects. Can you solve a similar bug?',
  type: QUESTION_TYPE.CODING,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-02'),
  difficulty: DIFFICULTY.EASY,
  showPreview: true,
  showConsole: true,
  isNew: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/useTimer.js': { code: require('./src/useTimer.js').code },
  },
};
