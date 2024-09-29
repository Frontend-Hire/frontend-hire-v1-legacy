import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'currying-1',
  title: 'Currying - 1',
  description:
    'A common yet advanced question to test your knowledge of currying.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-29'),
  difficulty: DIFFICULTY.HARD,
  isFree: true,
};
