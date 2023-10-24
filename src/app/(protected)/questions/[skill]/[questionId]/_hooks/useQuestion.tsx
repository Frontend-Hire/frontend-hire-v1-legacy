import * as React from 'react';
import { Meta } from '@/types/mdx';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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
  const supabaseBrowserClient = createClientComponentClient();
  const [data, setData] = React.useState<Question>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/questions/${skill}/${questionId}/prompt.mdx`,
        );

        const { data } = await supabaseBrowserClient
          .from('code_submissions')
          .select(`id, files (file_name, code)`)
          .eq('question_id', questionId)
          .limit(1)
          .maybeSingle();

        if (data) {
          data.files.forEach(
            (file) => (meta.files[file.file_name].code = file.code),
          );
        }

        localStorage.setItem('submission_id', data?.id || '');
        localStorage.setItem('question_id', questionId || '');

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
