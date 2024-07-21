import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'can-you-center-a-div',
  title: 'Can you center a div?',
  description: `"Centering a div" - this phrase might sound simple, but it's a longstanding joke in the CSS community due to the surprising complexity it can involve.`,
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'static',
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-21'),
  difficulty: DIFFICULTY.EASY,
  showPreview: true,
  isFree: true,
  files: {
    '/index.html': { code: require('./src/index.html').code },
    '/styles.css': { code: require('./src/styles.css').code },
  },
};
