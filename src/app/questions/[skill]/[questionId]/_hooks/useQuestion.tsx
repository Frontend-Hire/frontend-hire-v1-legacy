import { Meta } from '@/types/mdx';
import * as React from 'react';

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
  const [data, setData] = React.useState<Question>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/questions/${skill.toLowerCase()}/${questionId.toLowerCase()}/prompt.mdx`,
        );

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
  }, [questionId, skill]);

  return { data };
}
