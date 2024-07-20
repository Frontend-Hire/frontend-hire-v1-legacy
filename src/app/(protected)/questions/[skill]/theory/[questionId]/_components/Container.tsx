import { Question } from '@/types/Question';
import PrimaryLayout from '../_layout/PrimaryLayout';
import Header from './Header';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import DifficultyBadge from '@/components/DifficultyBadge';

type ContainerProps = {
  questionsListButtonWithSheet: React.ReactNode;
  questionMeta: Question;
  questionContent: React.ReactNode;
};

export default function Container({
  questionsListButtonWithSheet,
  questionContent,
  questionMeta,
}: ContainerProps) {
  return (
    <PrimaryLayout
      header={
        <Header questionsListButtonWithSheet={questionsListButtonWithSheet} />
      }
    >
      <div className="h-0 flex-grow">
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
          ]}
        />
      </div>
    </PrimaryLayout>
  );
}
