import * as React from 'react';
import { Meta } from '@/types/mdx';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';

export interface IQuestionLoading {
  status: 'loading';
}

export interface IQuestionError {
  status: 'error';
  message: string;
}

export interface IQuestionSuccess {
  status: 'success';
  question: {
    getContent: () => React.ReactNode;
    meta: Meta;
  };
}

export interface IQuestionIdle {
  status: 'idle';
}

export type Question =
  | IQuestionLoading
  | IQuestionError
  | IQuestionSuccess
  | IQuestionIdle;

export default function useQuestion(skill: string, questionId: string) {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const [data, setData] = React.useState<Question>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/data/questions/${skill}/${questionId}/prompt.mdx`,
        );

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
            (file) => (meta.files[file.file_name].code = file.code),
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

        sessionStorage.setItem('question_id', questionId || '');

        return { getContent, meta };
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
          question: data as IQuestionSuccess['question'],
        });
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [questionId, skill, supabaseBrowserClient]);

  return { data };
}
