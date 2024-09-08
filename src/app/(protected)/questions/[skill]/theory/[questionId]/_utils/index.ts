import { QuestionSkill, Question } from '@/types/Question';
import { cache } from 'react';

export const getTheoryQuestionMetadata = cache(
  async (questionId: string, skill: QuestionSkill) => {
    try {
      const { meta } = require(
        `@/data/questions/${skill}/theory/${questionId}/meta.ts`,
      );

      return { meta } as { meta: Question };
    } catch (error) {
      return { meta: null };
    }
  },
);

export const getTheoryQuestion = cache(
  async (questionId: string, skill: QuestionSkill) => {
    const { default: getContent } = require(
      `@/data/questions/${skill}/theory/${questionId}/prompt.mdx`,
    );

    return { getContent } as { getContent: () => React.ReactNode };
  },
);
