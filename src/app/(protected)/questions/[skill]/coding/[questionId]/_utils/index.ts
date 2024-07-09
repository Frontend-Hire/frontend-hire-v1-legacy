import { QUESTION_SKILL, Question } from '@/types/Question';
import { cache } from 'react';

export const getCodingQuestionMetadata = cache(
  async (questionId: string, skill: QUESTION_SKILL) => {
    try {
      const { meta } = require(
        `@/data/questions/${skill}/coding/${questionId}/meta.ts`,
      );

      return { meta } as { meta: Question };
    } catch (error) {
      return { meta: null };
    }
  },
);

export const getCodingQuestion = cache(
  async (questionId: string, skill: QUESTION_SKILL) => {
    const { default: getContent } = require(
      `@/data/questions/${skill}/coding/${questionId}/question.mdx`,
    );

    return { getContent } as { getContent: () => React.ReactNode };
  },
);

export const getCodingQuestionSolution = cache(
  async (questionId: string, skill: QUESTION_SKILL) => {
    const { default: getContent } = require(
      `@/data/questions/${skill}/coding/${questionId}/solution.mdx`,
    );

    return { getContent } as { getContent: () => React.ReactNode };
  },
);
