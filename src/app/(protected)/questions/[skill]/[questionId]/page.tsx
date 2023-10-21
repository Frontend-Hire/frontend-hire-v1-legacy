'use client';

import * as React from 'react';

import { SandpackProvider } from '@codesandbox/sandpack-react';
import QuestionLayoutSkeleton from '@/components/QuestionLayoutSkeleton';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import useQuestion from './_hooks/useQuestion';
import Container from './_components/Container';
import QuestionHotkeysProvider from './_components/QuestionHotkeysProvider';
import Header from './_components/Header';
import PrimaryLayout from './_layout/PrimaryLayout';

export default function Question({
  params,
}: {
  params: { questionId: string; skill: string };
}) {
  const { questionId, skill } = params;
  const { data } = useQuestion(skill, questionId);

  if (data.status === 'loading' || data.status === 'idle')
    return (
      <PrimaryLayout header={<HeaderSkeleton />}>
        <QuestionLayoutSkeleton />
      </PrimaryLayout>
    );

  if (data.status === 'error') return '---------------ERROR---------------';

  return (
    <PrimaryLayout header={<Header skill={skill} />}>
      <QuestionHotkeysProvider>
        <SandpackProvider
          style={{
            height: '100%',
          }}
          template={data.question.meta.template}
          files={data.question.meta.files}
          options={{
            externalResources: data.question.meta.externalCDNs,
            autoReload: true,
            autorun: false, // If true results in infinite loader
          }}
        >
          <Container data={data} />
        </SandpackProvider>
      </QuestionHotkeysProvider>
    </PrimaryLayout>
  );
}
