'use client';

import HeaderSkeleton from '@/components/HeaderSkeleton';
import QuestionLayout from '@/components/Questions/QuestionLayout';
import { QuestionLayoutProvider } from '@/components/Questions/QuestionLayout/QuestionLayoutProvider';
import QuestionLayoutSkeleton from '@/components/Questions/QuestionLayoutSkeleton';
import { BrowserCodingQuestion } from '@/types/Question';
import { SandpackFiles, SandpackProvider } from '@codesandbox/sandpack-react';
import React from 'react';
import PrimaryLayout from '../../_layout/PrimaryLayout';
import CodeEditor from './CodeEditor';
import Header from './Header';
import Output from './Output';
import QuestionContainer from './QuestionContainer';
import QuestionHotkeysProvider from './QuestionHotkeysProvider';
import ResetButtonWithAlert from './ResetButtonWithAlert';

type BrowserClientContainerProps = {
  questionMeta: BrowserCodingQuestion;
  originalFiles: SandpackFiles;
  updatedFiles: SandpackFiles;
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
  hintsContent?: React.ReactNode;
  instructionsContent?: React.ReactNode;
  questionsListButtonWithSheet: React.ReactNode;
};

export default function BrowserClientContainer({
  questionsListButtonWithSheet,
  questionMeta,
  originalFiles,
  updatedFiles,
  questionContent,
  solutionContent,
  hintsContent,
  instructionsContent,
}: BrowserClientContainerProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <PrimaryLayout header={<HeaderSkeleton />}>
        <QuestionLayoutSkeleton cols={4} />
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
                    instructionsContent={instructionsContent}
                    hintsContent={hintsContent}
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
