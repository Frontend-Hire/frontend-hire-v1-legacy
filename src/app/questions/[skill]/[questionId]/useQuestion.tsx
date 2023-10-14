import { Meta } from '@/types/mdx';
import * as React from 'react';

interface ILoading {
  status: 'loading';
}

interface IError {
  status: 'error';
  message: string;
}

interface ISuccess {
  status: 'success';
  question: {
    getContent: () => React.ReactNode;
    meta: Meta;
  };
}

interface IIdle {
  status: 'idle';
}

type Question = ILoading | IError | ISuccess | IIdle;

export default function useQuestion(skill: string, questionId: string) {
  const [data, setData] = React.useState<Question>({
    status: 'idle',
  });

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const { default: getContent, meta } = require(
          `@/questions/${skill.toLowerCase()}/${questionId}.mdx`,
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
        setData({ status: 'success', question: data as ISuccess['question'] });
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [questionId, skill]);

  return { data };
}
