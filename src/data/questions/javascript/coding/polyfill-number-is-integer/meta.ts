import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-number-is-integer',
  title: 'Polyfill: Number.isInteger() Static Method',
  description:
    'The Number.isInteger() static method determines if the passed value is an integer. Can you implement it?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-18'),
  difficulty: DIFFICULTY.EASY,
};
