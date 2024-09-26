import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-function-apply',
  title: 'Polyfill: Function.prototype.apply() Method',
  description:
    'The Function.prototype.apply() method calls a function with a given this value and arguments provided as an array.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-26'),
  difficulty: DIFFICULTY.MEDIUM,
};
