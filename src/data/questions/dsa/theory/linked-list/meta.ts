import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'linked-list',
  title: 'What is a Linked List?',
  description:
    'Linked List is a linear data structure. It is a collection of nodes. Each node contains a value and a pointer to the next node in the list.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-15'),
  isFree: true,
};
