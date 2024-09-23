import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-is-temporal-dead-zone',
  title: 'What is Temporal Dead Zone?',
  description:
    'Understanding Temporal Dead Zone is crucial for mastering variable scoping in JavaScript, especially in modern JavaScript with `let` and `const`.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-09-24'),
  isFree: true,
};
