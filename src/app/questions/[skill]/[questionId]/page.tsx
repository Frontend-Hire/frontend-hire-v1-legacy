'use client';

import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import * as React from 'react';
import Layout from '@/components/Layout';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import LayoutSkeleton from '@/components/LayoutSkeleton';
import useQuestion from './useQuestion';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;
  const { data } = useQuestion(skill, questionId);

  if (data.status === 'loading' || data.status === 'idle')
    return <LayoutSkeleton />;

  if (data.status === 'error') return '---------------ERROR---------------';

  return (
    <SandpackProvider
      style={{
        height: '100%',
      }}
      template={data.question.meta.template}
      files={data.question.meta.files}
      options={{
        autoReload: true,
        autorun: false,
      }}
    >
      <Layout
        topLeft={<QuestionLayoutItem question={data.question.getContent()} />}
        topRight={
          <SandpackCodeEditor
            showTabs
            showLineNumbers
            wrapContent
            className="h-full"
          />
        }
        bottomLeft={
          data.question.meta.expectedOutput ? (
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
