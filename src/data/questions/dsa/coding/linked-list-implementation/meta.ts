import {
  DIFFICULTY,
  QUESTION_TYPE,
  Question,
  CODING_ENVIRONMENT_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'linked-list-implementation',
  title: 'Linked List: Implementation',
  description: 'Implement a linked list.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-19'),
  isFree: true,
};
