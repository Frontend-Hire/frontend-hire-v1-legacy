import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'refactor-long-method-1',
  title: 'Refactor: Long Method - 1',
  description:
    'Most common code smells are easy to spot. Long methods are one of them. Refactor it to make it more readable and maintainable.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-07-18'),
  difficulty: DIFFICULTY.EASY,
  isFree: true,
};
