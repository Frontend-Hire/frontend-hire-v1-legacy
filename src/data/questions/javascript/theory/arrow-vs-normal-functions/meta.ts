import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'arrow-vs-normal-functions',
  title: 'Arrow vs Normal Functions',
  description:
    'A common question in JavaScript interviews is the difference between arrow functions and normal functions. This is an essential topic, especially when dealing with `this` keyword behavior and function scopes.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-26'),
  isFree: true,
};
