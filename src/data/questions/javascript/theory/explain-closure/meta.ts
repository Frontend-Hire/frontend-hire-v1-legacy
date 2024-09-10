import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'explain-closure',
  title: 'Explain Closure',
  description:
    'Closure is a fundamental concept in JavaScript that allows inner functions to access variables from outer functions even after the outer functions have returned.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-10'),
  isFree: true,
};
