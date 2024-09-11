import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'vanilla-tic-tac-toe',
  title: 'Vanilla JS: Tic-Tac-Toe Game',
  description: 'A classic game but can you build it without using a framework?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  publishedOn: new Date('2024-09-11'),
  template: 'static',
  files: {
    '/index.html': { code: require('./src/index.html.js').code },
    '/index.js': { code: require('./src/index.js').code },
    '/styles.css': { code: require('./src/styles.css.js').code },
  },
  showPreview: true,
  showConsole: true,
  recommendedLayout: 'col-3',
  difficulty: DIFFICULTY.MEDIUM,
};
