import DifficultyBadge from '@/components/DifficultyBadge';
import ProseContent from '@/components/ProseContent';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import { Question } from '@/types/Question';
import PrimaryLayout from '../_layout/PrimaryLayout';
import Header from './Header';

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
              content: <ProseContent>{questionContent}</ProseContent>,
            },
          ]}
        />
      </div>
    </PrimaryLayout>
  );
}
