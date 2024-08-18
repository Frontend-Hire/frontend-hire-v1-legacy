import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-array-filter',
  title: 'Polyfill: Array.filter() Method',
  description:
    'The Array.filter() method creates a new array with all elements that pass the test implemented by the provided function.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-08-18'),
  difficulty: DIFFICULTY.MEDIUM,
  isFree: true,
};
