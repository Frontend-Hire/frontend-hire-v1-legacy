'use client';

import { SandpackFiles, SandpackProvider } from '@codesandbox/sandpack-react';
import QuestionHotkeysProvider from './QuestionHotkeysProvider';
import Header from './Header/Header';
import PrimaryLayout from '../_layout/PrimaryLayout';
import { CodingQuestion, QUESTION_SKILL, Question } from '@/types/Question';
import QuestionLayout from '@/components/Questions/QuestionLayout';
import QuestionContainer from './QuestionContainer';
import CodeEditor from './CodeEditor';
import Output from './Output';
import { QuestionLayoutProvider } from '@/components/Questions/QuestionLayout/QuestionLayoutProvider';
import React from 'react';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import QuestionLayoutSkeleton from '@/components/Questions/QuestionLayoutSkeleton';
import ResetButtonWithAlert from './ResetButtonWithAlert';

type ClientContainerProps = {
  questionMeta: CodingQuestion;
  originalFiles: SandpackFiles;
  updatedFiles: SandpackFiles;
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
  questionsListButtonWithSheet: React.ReactNode;
};

export default function ClientContainer({
  questionsListButtonWithSheet,
  questionMeta,
  originalFiles,
  updatedFiles,
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
        files={updatedFiles}
        options={{
          externalResources: questionMeta.externalCDNs,
          autoReload: true,
          autorun: false, // If true results in infinite loader
        }}
      >
        <QuestionLayoutProvider questionLayout={questionMeta.recommendedLayout}>
          <PrimaryLayout
            header={
              <Header
                questionsListButtonWithSheet={questionsListButtonWithSheet}
              />
            }
          >
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
              topRight={{
                label: 'Code Editor',
                content: (
                  <CodeEditor
                    resetButton={
                      <ResetButtonWithAlert originalFiles={originalFiles} />
                    }
                  />
                ),
              }}
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
