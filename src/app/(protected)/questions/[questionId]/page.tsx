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

export default function Question() {
  const { data } = useQuestion();

  if (data.status === 'loading' || data.status === 'idle')
    return (
      <PrimaryLayout header={<HeaderSkeleton />}>
        <QuestionLayoutSkeleton />
      </PrimaryLayout>
    );

  if (data.status === 'error') {
    throw new Error(data.message);
  }

  if (data.question == undefined) {
    throw new Error('This was unexepected');
  }

  return (
    <QuestionHotkeysProvider>
      <SandpackProvider
        style={{
          height: '100%',
        }}
        template={data.question.meta.template}
        customSetup={{
          dependencies: data.question.meta.dependencies,
        }}
        theme="dark"
        files={data.question.meta.files}
        options={{
          externalResources: data.question.meta.externalCDNs,
          autoReload: true,
          autorun: false, // If true results in infinite loader
        }}
      >
        <PrimaryLayout header={<Header />}>
          <Container data={data} />
        </PrimaryLayout>
      </SandpackProvider>
    </QuestionHotkeysProvider>
  );
}
