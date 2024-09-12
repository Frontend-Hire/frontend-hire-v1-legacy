import DifficultyBadge from '@/components/DifficultyBadge';
import ProseContent from '@/components/ProseContent';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import { Question, QuestionTab } from '@/types/Question';

type QuestionContainerProps = {
  difficulty: Question['difficulty'];
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
  hintsContent?: React.ReactNode;
  instructionsContent?: React.ReactNode;
};

export default function QuestionContainer({
  difficulty,
  questionContent,
  solutionContent,
  hintsContent,
  instructionsContent,
}: QuestionContainerProps) {
  const tabs = [
    {
      label: 'Question',
      value: 'Question',
      content: <ProseContent>{questionContent}</ProseContent>,
    },
    {
      label: 'Local Setup Instructions',
      value: 'Local Setup Instructions',
      content: <ProseContent>{instructionsContent}</ProseContent>,
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
  ].filter(Boolean) as Array<QuestionTab>;

  return (
    <QuestionLayoutItem
      rightButtons={
        <>{difficulty && <DifficultyBadge difficulty={difficulty} />}</>
      }
      tabs={tabs}
    />
  );
}
