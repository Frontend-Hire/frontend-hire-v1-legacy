import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'reverse-linked-list',
  title: 'Linked List: How to reverse a Linked List',
  description:
    'This is a common interview question that is asked in many companies, it is a good question to test your understanding of Linked Lists.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-19'),
  difficulty: DIFFICULTY.MEDIUM,
  isFree: true,
};
