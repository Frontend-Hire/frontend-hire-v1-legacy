import * as React from 'react';
import { Meta } from '@/types/mdx';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';
import { SandpackFile } from '@codesandbox/sandpack-react';
import { QuestionData } from '../_types/questionData';

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
    content: string;
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

export default function useClientData(questionData: QuestionData) {
  const { questionId } = useParams<{
    questionId: string;
  }>();
  const { content, meta } = questionData;
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
        const metaDeepCopy = structuredClone(meta);

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
              ((metaDeepCopy.files[file.file_name] as SandpackFile).code =
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

        return { content, meta: metaDeepCopy };
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
  }, [content, meta, questionId, supabaseBrowserClient]);

  return { data };
}
