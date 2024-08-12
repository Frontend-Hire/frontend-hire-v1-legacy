import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-is-a-domain',
  title: 'What is a domain?',
  description: '',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-08-12'),
  isFree: true,
};
