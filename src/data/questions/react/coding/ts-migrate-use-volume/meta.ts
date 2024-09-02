import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'ts-migrate-use-volume',
  title: 'TypeScript: Migrate useVolume',
  description:
    'Remember our question "Hooks: useVolume" but that was in JavaScript. Try to migrate it to TypeScript.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-09-02'),
  difficulty: DIFFICULTY.MEDIUM,
};
