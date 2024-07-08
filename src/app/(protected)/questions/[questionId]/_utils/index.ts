import { QuestionMeta } from '@/types/Question';
import { cache } from 'react';

export const getQuestionMetadata = cache(async (questionId: string) => {
  const { meta } = require(`@/data/questions/${questionId}/meta.ts`);

  return { meta } as { meta: QuestionMeta };
});

export const getQuestion = cache(async (questionId: string) => {
  const { default: getContent } = require(
    `@/data/questions/${questionId}/question.mdx`,
  );

  return { getContent } as { getContent: () => React.ReactNode };
});

export const getQuestionSolution = cache(async (questionId: string) => {
  const { default: getContent } = require(
    `@/data/questions/${questionId}/solution.mdx`,
  );

  return { getContent } as { getContent: () => React.ReactNode };
});
