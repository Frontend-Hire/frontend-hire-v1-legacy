import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'ts-font-size',
  title: 'TypeScript: Font Size',
  description:
    'With this question, you will learn a weird thing about TypeScript that helps with better autocomplete.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-08-20'),
  difficulty: DIFFICULTY.MEDIUM,
};
