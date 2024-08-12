import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-is-a-domain',
  title: 'What is a domain?',
  description:
    'A super common interview question, targeted usually at new web developers. But can also easily confuse the veterans.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-08-12'),
  isFree: true,
};
