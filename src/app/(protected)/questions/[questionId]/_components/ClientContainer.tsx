'use client';

import * as React from 'react';

import { SandpackProvider } from '@codesandbox/sandpack-react';
import QuestionLayoutSkeleton from '@/components/QuestionLayoutSkeleton';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import Container from './Container';
import QuestionHotkeysProvider from './QuestionHotkeysProvider';
import Header from './Header';
import PrimaryLayout from '../_layout/PrimaryLayout';
import useClientData from '../_hooks/useClientData';
import { QuestionData } from '../_types/questionData';
import { QuestionDataProvider } from '../_context/QuestionDataProvider';

export default function ClientContainer() {
  const { data } = useClientData();

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
    <QuestionDataProvider questionData={data.question}>
      <QuestionHotkeysProvider>
        <SandpackProvider
          style={{
            height: '100%',
          }}
          template={data.question.originalMeta.template}
          customSetup={{
            dependencies: data.question.originalMeta.dependencies,
          }}
          theme="dark"
          files={data.question.userMeta.files}
          options={{
            externalResources: data.question.originalMeta.externalCDNs,
            autoReload: true,
            autorun: false, // If true results in infinite loader
          }}
        >
          <PrimaryLayout header={<Header />}>
            <Container />
          </PrimaryLayout>
        </SandpackProvider>
      </QuestionHotkeysProvider>
    </QuestionDataProvider>
  );
}
