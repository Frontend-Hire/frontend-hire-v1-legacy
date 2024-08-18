import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'flatten-an-object',
  title: 'Flatten an Object',
  description:
    'One of our favorite questions to test a bit of problem solving skills.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-08-18'),
  difficulty: DIFFICULTY.MEDIUM,
  isFree: true,
};
