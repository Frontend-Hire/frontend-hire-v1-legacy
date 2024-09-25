import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-array-sort',
  title: 'Polyfill: Array.sort() Method',
  description:
    'The Array.sort() method sorts the elements of an array in place and returns the sorted array.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-25'),
  difficulty: DIFFICULTY.MEDIUM,
};
