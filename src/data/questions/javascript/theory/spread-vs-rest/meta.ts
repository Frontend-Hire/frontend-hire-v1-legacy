import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'spread-vs-rest',
  title: 'What are the differences between Spread and Rest?',
  description:
    'Simple but important, especially for managing function arguments and handling collections of data.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-25'),
  isFree: true,
};
