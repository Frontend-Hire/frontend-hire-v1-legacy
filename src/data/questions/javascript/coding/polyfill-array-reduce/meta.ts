import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-array-reduce',
  title: 'Polyfill: Array.reduce() Method',
  description:
    'The Array.reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-25'),
  difficulty: DIFFICULTY.HARD,
};
