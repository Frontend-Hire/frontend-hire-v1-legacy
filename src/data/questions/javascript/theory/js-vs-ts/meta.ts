import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'js-vs-ts',
  title: 'What are the differences between JavaScript and TypeScript?',
  description:
    'Companies are finding out that TypeScript is the way to go. So, can you explain the differences between JavaScript and TypeScript?',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-08'),
  isFree: true,
};
