import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'explain-callback',
  title: 'Explain Callbacks',
  description:
    'Callbacks are a fundamental concept in JavaScript, especially important for handling asynchronous operations. Understanding callbacks is crucial for both practical development and interview scenarios.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-23'),
};
