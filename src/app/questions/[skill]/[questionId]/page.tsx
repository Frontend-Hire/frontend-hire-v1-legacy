'use client';

import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import * as React from 'react';
import Layout from '@/components/Layout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { Skill, getQuestionConfig } from '@/utils/template';
import { Meta } from '@/types/mdx';
import { Status } from '@/types/status';
import LayoutSkeleton from '@/components/LayoutSkeleton';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;
  const [question, setQuestion] = React.useState<{
    getContent: () => React.ReactNode;
    meta: Meta;
  }>();
  const [status, setStatus] = React.useState<Status>('idle');

  const { template } = getQuestionConfig(skill.toLowerCase() as Skill);

  React.useEffect(() => {
    const getQuestion = async () => {
      try {
        const {
          default: getContent,
          meta,
        } = require('@/sampleQuestion/forms.mdx');

        return { getContent, meta };
      } catch (e) {
        console.log(e);
        setStatus('error');
      }
    };

    setStatus('loading');
    getQuestion().then((data) => {
      setQuestion(data);
      const timeout = setTimeout(() => {
        setStatus('success');
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [questionId]);

  if (status === 'loading' || status === 'idle') return <LayoutSkeleton />;

  if (status === 'error') return '---------------ERROR---------------';

  return (
    <SandpackProvider
      style={{
        height: '100%',
      }}
      template={template}
      options={{
        autoReload: true,
        autorun: false,
      }}
    >
      <Layout
        topLeft={<QuestionLayoutItem question={question?.getContent()} />}
        topRight={
          <SandpackCodeEditor showLineNumbers wrapContent className="h-full" />
        }
        bottomLeft={
          question?.meta.expectedOutput ? (
            <div className="h-full">Expected Output</div>
          ) : (
            ''
          )
        }
        bottomRight={<SandpackPreview className="h-full" />}
      />
    </SandpackProvider>
  );
}
