import { QUESTION_SKILL, Question } from '@/types/Question';
import { TypedSupabaseClient } from '@/types/typedSupabaseClient';
import { QueryData } from '@supabase/supabase-js';
import { cache } from 'react';

export const FILE_TYPES = {
  QUESTION: 'question.mdx',
  SOLUTION: 'solution.mdx',
  INSTRUCTIONS: 'instructions.mdx',
  HINTS: 'hints.mdx',
  META: 'meta.ts',
} as const;

type FileTypesKeys = keyof typeof FILE_TYPES;

type FileTypes = (typeof FILE_TYPES)[FileTypesKeys];

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

export const getFileData = cache(
  async (questionId: string, skill: QUESTION_SKILL, file: FileTypes) => {
    try {
      const { default: getContent } = require(
        `@/data/questions/${skill}/coding/${questionId}/${file}`,
      );

      return { getContent } as { getContent: () => React.ReactNode };
    } catch (error) {
      return { getContent: () => null };
    }
  },
);

export const getCodeHistoryQuery = async (
  client: TypedSupabaseClient,
  questionId: string,
) => {
  return client
    .from('code_history')
    .select('id, code_history_files (file_name, code)')
    .eq('question_id', questionId)
    .limit(1)
    .maybeSingle();
};

export type CodeHistory = QueryData<ReturnType<typeof getCodeHistoryQuery>>;
