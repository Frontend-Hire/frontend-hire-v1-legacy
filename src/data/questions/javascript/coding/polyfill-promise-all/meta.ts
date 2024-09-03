import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-promise-all',
  title: 'Polyfill: Promise.all() Static Method',
  description:
    'The Promise.all() static method returns a single promise that resolves when all of the promises in an array argument have resolved, or rejects when any of the promises in the array reject.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-3'),
  difficulty: DIFFICULTY.HARD,
};
