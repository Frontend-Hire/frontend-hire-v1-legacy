import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'polyfill-function-call',
  title: 'Polyfill: Function.prototype.call() Method',
  description:
    'The Function.prototype.call() method calls a function with a given this value and arguments provided individually.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-26'),
  difficulty: DIFFICULTY.MEDIUM,
};
