'use client';

import { SandpackProvider } from '@codesandbox/sandpack-react';
import * as React from 'react';
import QuestionLayoutSkeleton from '@/components/QuestionLayoutSkeleton';
import useQuestion from './_hooks/useQuestion';
import Container from './_components/Container';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;
  const { data } = useQuestion(skill, questionId);

  if (data.status === 'loading' || data.status === 'idle')
    return <QuestionLayoutSkeleton />;

  if (data.status === 'error') return '---------------ERROR---------------';

  return (
    <SandpackProvider
      style={{
        height: '100%',
      }}
      template={data.question.meta.template}
      files={data.question.meta.files}
      options={{
        activeFile: Object.keys(data.question.meta.files || [])[0] || undefined,
        externalResources: data.question.meta.externalCDNs,
        autoReload: true,
        autorun: false, // If true results in infinite loader
      }}
    >
      <Container data={data} />
    </SandpackProvider>
  );
}
