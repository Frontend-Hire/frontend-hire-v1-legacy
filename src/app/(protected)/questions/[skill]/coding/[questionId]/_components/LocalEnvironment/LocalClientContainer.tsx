'use client';

import DifficultyBadge from '@/components/DifficultyBadge';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import ProseContent from '@/components/ProseContent';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import QuestionLayoutSkeleton from '@/components/Questions/QuestionLayoutSkeleton';
import { LocalCodingQuestion, QuestionTab } from '@/types/Question';
import React from 'react';
import PrimaryLayout from '../../_layout/PrimaryLayout';
import Header from './Header';
import LocalInstructions from './LocalInstructions';

type LocalClientContainerProps = {
  questionMeta: LocalCodingQuestion;
  questionContent: React.ReactNode;
  solutionContent: React.ReactNode;
  instructionsContent: React.ReactNode;
  questionsListButtonWithSheet: React.ReactNode;
  hintsContent: React.ReactNode;
};

export default function LocalClientContainer({
  questionsListButtonWithSheet,
  questionMeta,
  questionContent,
  solutionContent,
  instructionsContent,
  hintsContent,
}: LocalClientContainerProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <PrimaryLayout isContainer header={<HeaderSkeleton />}>
        <QuestionLayoutSkeleton />
      </PrimaryLayout>
    );
  }

  const tabs = [
    {
      label: 'Question',
      value: 'Question',
      content: <ProseContent>{questionContent}</ProseContent>,
    },
    hintsContent
      ? {
          label: 'Hints',
          value: 'Hints',
          content: <ProseContent>{hintsContent}</ProseContent>,
        }
      : null,
    {
      label: 'Solution',
      value: 'Solution',
      content: <ProseContent>{solutionContent}</ProseContent>,
    },
    {
      label: 'Local Setup Instructions',
      value: 'Local Setup Instructions',
      content: <ProseContent>{instructionsContent}</ProseContent>,
    },
  ].filter(Boolean) as Array<QuestionTab>;

  return (
    <PrimaryLayout
      isContainer
      header={
        <Header questionsListButtonWithSheet={questionsListButtonWithSheet} />
      }
    >
      <div className="flex h-full flex-col gap-1">
        <LocalInstructions />
        <div className="h-0 flex-grow">
          <QuestionLayoutItem
            rightButtons={
              <>
                {questionMeta.difficulty && (
                  <DifficultyBadge difficulty={questionMeta.difficulty} />
                )}
              </>
            }
            tabs={tabs}
          />
        </div>
      </div>
    </PrimaryLayout>
  );
}
