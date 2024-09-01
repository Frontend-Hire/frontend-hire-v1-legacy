import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-hover',
  title: 'Use Hover',
  description:
    'Create a hook that returns whether the mouse is hovering over a given element.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-01'),
  difficulty: DIFFICULTY.MEDIUM,
};
