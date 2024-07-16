import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-is-react',
  title: 'What is React?',
  description:
    'Almost all fresher interviews open with this questions. We cover possible follow-up questions as well.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.EASY,
  publishedOn: new Date('2024-07-01'),
  isNew: true,
  isFree: true,
};
