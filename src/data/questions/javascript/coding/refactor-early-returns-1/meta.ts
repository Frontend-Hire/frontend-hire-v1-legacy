import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'refactor-early-returns-1',
  title: 'Refactor: Early Returns - 1',
  description:
    'Refactor the code to use early returns instead of too many if-else statements.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-08-12'),
  difficulty: DIFFICULTY.EASY,
  isFree: true,
};
