import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-do-you-mean-by-accessibility',
  title: 'What do you mean by accessibility?',
  description:
    'Accessibility is a tough topic, in fact, there are dedicated roles called Accessibility Engineering who deal exclusively with web accessibility.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-15'),
  isFree: true,
};
