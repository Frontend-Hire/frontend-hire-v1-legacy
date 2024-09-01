import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-mouse',
  title: 'Use Mouse',
  description: 'Create a custom hook that tracks the mouse position.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-01'),
  isFree: true,
  difficulty: DIFFICULTY.MEDIUM,
};
