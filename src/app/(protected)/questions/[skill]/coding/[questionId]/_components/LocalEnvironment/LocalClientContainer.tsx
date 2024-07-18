'use client';

import DifficultyBadge from '@/components/DifficultyBadge';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import QuestionLayoutSkeleton from '@/components/Questions/QuestionLayoutSkeleton';
import { LocalCodingQuestion } from '@/types/Question';
import React from 'react';
import PrimaryLayout from '../../_layout/PrimaryLayout';
import Header from './Header';

type LocalClientContainerProps = {
  questionMeta: LocalCodingQuestion;
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
  questionsListButtonWithSheet: React.ReactNode;
};

export default function LocalClientContainer({
  questionsListButtonWithSheet,
  questionMeta,
  questionContent,
  solutionContent,
}: LocalClientContainerProps) {
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
    <PrimaryLayout
      isContainer
      header={
        <Header questionsListButtonWithSheet={questionsListButtonWithSheet} />
      }
    >
      <QuestionLayoutItem
        rightButtons={
          <>
            {questionMeta.difficulty && (
              <DifficultyBadge difficulty={questionMeta.difficulty} />
            )}
          </>
        }
        tabs={[
          {
            label: 'Question',
            value: 'Question',
            content: (
              <div className="prose prose-invert max-w-none p-4 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
                {questionContent}
              </div>
            ),
          },
          {
            label: 'Solution',
            value: 'Solution',
            content: (
              <div className="prose prose-invert max-w-none p-4 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
                {solutionContent}
              </div>
            ),
          },
        ]}
      />
    </PrimaryLayout>
  );
}
