import React from 'react';
import { Meta } from '@/types/mdx';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';
import { SandpackFile } from '@codesandbox/sandpack-react';
import { QuestionData } from '../_types/questionData';

export type QuestionLoading = {
  status: 'loading';
};

export type QuestionError = {
  status: 'error';
  message: string;
};

export type QuestionSuccess = {
  status: 'success';
  question: QuestionData;
};

export type QuestionIdle = {
  status: 'idle';
};

export type Question =
  | QuestionLoading
  | QuestionError
  | QuestionSuccess
  | QuestionIdle;

export default function useClientData() {
  const { questionId } = useParams<{
    questionId: string;
  }>();
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const [data, setData] = React.useState<Question>({
    status: 'idle',
  });

  React.useEffect(() => {
    // SO THAT NEW QUESTIONS DONT CONFLICT
    sessionStorage.clear();
  }, [questionId]);

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/data/questions/${questionId}/prompt.mdx`,
        );

        const originalMeta = structuredClone(meta);
        const userMeta = structuredClone(meta);

        const [{ data: codeSubmissionData }, { data: codeHistoryData }] =
          await Promise.all([
            supabaseBrowserClient
              .from('code_submissions')
              .select(`id`)
              .eq('question_id', questionId)
              .limit(1)
              .maybeSingle(),
            supabaseBrowserClient
              .from('code_history')
              .select(`id, code_history_files (file_name, code)`)
              .eq('question_id', questionId)
              .limit(1)
              .maybeSingle(),
          ]);

        if (codeHistoryData) {
          codeHistoryData.code_history_files.forEach(
            (file) =>
              ((userMeta.files[file.file_name] as SandpackFile).code =
                file.code),
          );
        }

        if (codeSubmissionData?.id) {
          sessionStorage.setItem(
            'code_submission_id',
            `${codeSubmissionData.id}`,
          );
        }

        if (codeHistoryData?.id) {
          sessionStorage.setItem('code_history_id', `${codeHistoryData.id}`);
        }

        let getSolutionContent = null;
        try {
          const { default: getContent } = require(
            `@/data/questions/${questionId}/solution.mdx`,
          );
          getSolutionContent = getContent;
        } catch (e) {
          // We don't need to do anything here
          getSolutionContent = null;
        }

        return { getContent, userMeta, originalMeta, getSolutionContent };
      } catch (e) {
        console.log(e);
        setData({ status: 'error', message: e as string });
      }
    };

    setData({ status: 'loading' });
    getQuestion().then((data) => {
      const timeout = setTimeout(() => {
        setData({
          status: 'success',
          question: data as QuestionSuccess['question'],
        });
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [questionId, supabaseBrowserClient]);

  return { data };
}
