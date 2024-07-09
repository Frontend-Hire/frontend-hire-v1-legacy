import { QUESTION_SKILL, Question } from '@/types/Question';
import { cache } from 'react';

export const getTheoryQuestionMetadata = cache(
  async (questionId: string, skill: QUESTION_SKILL) => {
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
