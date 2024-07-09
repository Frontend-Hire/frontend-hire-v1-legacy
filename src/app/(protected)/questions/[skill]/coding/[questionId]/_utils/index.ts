import { QUESTION_SKILL, QUESTION_TYPE, Question } from '@/types/Question';
import { cache } from 'react';

export const getQuestionMetadata = cache(
  async (questionId: string, skill: QUESTION_SKILL, type: QUESTION_TYPE) => {
    try {
      const { meta } = require(
        `@/data/questions/${skill}/${type}/${questionId}/meta.ts`,
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
