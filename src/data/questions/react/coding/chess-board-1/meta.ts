import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'chess-board-1',
  title: 'Chess Board - 1',
  description:
    'A common interview question that requires you to implement a React component that renders a chess board.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-09-17'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/ChessBoard.js': { code: require('./src/ChessBoard.js').code },
    '/constants.js': { code: require('./src/constants.js').code },
    '/utils.js': { code: require('./src/utils.js').code },
  },
};
