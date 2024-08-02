import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'how-to-import-react',
  title: 'How to import React?',
  description:
    'Not as simple as you think. This can open up a whole set of follow-up questions.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-08-02'),
  isFree: true,
};
