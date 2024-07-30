import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'style-active-route',
  title: 'Style Active Route',
  description:
    'You have an App with multiple routes but it is difficult to identify which route is currently active. How can you style the active route?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-07-30'),
  isFree: true,
  difficulty: DIFFICULTY.EASY,
};
