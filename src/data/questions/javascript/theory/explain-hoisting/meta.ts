import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'explain-hoisting',
  title: 'Explain Hoisting',
  description:
    'You do not have to worry much about Hoisting in the real world but for interviews this is a must to know topic!',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-10'),
  isFree: true,
};
