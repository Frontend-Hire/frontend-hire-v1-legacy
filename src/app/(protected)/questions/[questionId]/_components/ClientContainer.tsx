'use client';

import { SandpackProvider } from '@codesandbox/sandpack-react';
import QuestionHotkeysProvider from './QuestionHotkeysProvider';
import Header from './Header';
import PrimaryLayout from '../_layout/PrimaryLayout';
import { QuestionMeta } from '@/types/Question';
import QuestionLayout from '@/components/QuestionLayout';
import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';
import { QuestionLayoutProvider } from '@/components/QuestionLayout/QuestionLayoutProvider';
import React from 'react';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import QuestionLayoutSkeleton from '@/components/QuestionLayoutSkeleton';

type ClientContainerProps = {
  questionMeta: QuestionMeta;
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
};

export default function ClientContainer({
  questionMeta,
  questionContent,
  solutionContent,
}: ClientContainerProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <PrimaryLayout header={<HeaderSkeleton />}>
        <QuestionLayoutSkeleton />
      </PrimaryLayout>
    );
  }

  return (
    <QuestionHotkeysProvider>
      <SandpackProvider
        style={{
          height: '100%',
        }}
        template={questionMeta.template}
        customSetup={{
          dependencies: questionMeta.dependencies,
        }}
        theme="dark"
        files={questionMeta.files}
        options={{
          externalResources: questionMeta.externalCDNs,
          autoReload: true,
          autorun: false, // If true results in infinite loader
        }}
      >
        <QuestionLayoutProvider questionLayout={questionMeta.recommendedLayout}>
          <PrimaryLayout header={<Header />}>
            <QuestionLayout
              topLeft={{
                label: 'Question Prompt',
                content: (
                  <QuestionContainer
                    difficulty={questionMeta.difficulty}
                    questionContent={questionContent}
                    solutionContent={solutionContent}
                  />
                ),
              }}
              topRight={{ label: 'Code Editor', content: <CodeEditor /> }}
              bottomRight={
                questionMeta.showConsole || questionMeta.showPreview
                  ? {
                      label: 'Output',
                      content: (
                        <Output
                          showConsole={questionMeta.showConsole}
                          showPreview={questionMeta.showPreview}
                        />
                      ),
                    }
                  : undefined
              }
            />
          </PrimaryLayout>
        </QuestionLayoutProvider>
      </SandpackProvider>
    </QuestionHotkeysProvider>
  );
}
