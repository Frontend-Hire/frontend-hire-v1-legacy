import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-array-map',
  title: 'Polyfill: Array.map() Method',
  description:
    'The Array.map() method creates a new array with the results of calling a provided function on every element in the calling array.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-25'),
  difficulty: DIFFICULTY.MEDIUM,
};
