import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'ts-migrate-use-state-1',
  title: 'TypeScript: Migrate useState - 1',
  description:
    'Remember our question "Hooks: useState - 1" but that was in JavaScript. Try to migrate it to TypeScript.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-08-05'),
  isFree: true,
  difficulty: DIFFICULTY.EASY,
};
