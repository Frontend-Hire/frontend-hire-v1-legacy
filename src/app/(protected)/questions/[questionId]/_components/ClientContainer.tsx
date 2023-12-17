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

interface Props {
  questionData: QuestionData;
}

export default function ClientContainer({ questionData }: Props) {
  const { data } = useClientData(questionData);

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
    <QuestionDataProvider questionData={questionData}>
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
            <Container />
          </PrimaryLayout>
        </SandpackProvider>
      </QuestionHotkeysProvider>
    </QuestionDataProvider>
  );
}
