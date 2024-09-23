import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'prototype-vs-object-vs-static-method',
  title:
    'Attaching a Function to Prototype of an Object vs to the Object Itself vs Static Methods',
  description:
    "Understanding the differences between attaching functions to an object's prototype, directly to the object itself, and as static methods is crucial for effective JavaScript programming and proper use of object-oriented patterns.",
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-23'),
};
