import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'currying-1',
  title: 'Currying - 1',
  description:
    'There are a lot of onChange handlers in this question. How can you make it more readable and maintainable?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-28'),
  difficulty: DIFFICULTY.HARD,
  showPreview: true,
  showConsole: true,
  isFree: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
  },
};
