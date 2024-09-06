import DifficultyBadge from '@/components/DifficultyBadge';
import ProseContent from '@/components/ProseContent';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import { Question } from '@/types/Question';

type QuestionContainerProps = {
  difficulty: Question['difficulty'];
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
  hintsContent?: React.ReactNode;
};

export default function QuestionContainer({
  difficulty,
  questionContent,
  solutionContent,
  hintsContent,
}: QuestionContainerProps) {
  const tabs = [
    {
      label: 'Question',
      value: 'Question',
      content: <ProseContent>{questionContent}</ProseContent>,
    },
  ];

  if (hintsContent) {
    tabs.push({
      label: 'Hints',
      value: 'Hints',
      content: <ProseContent>{hintsContent}</ProseContent>,
    });
  }

  if (solutionContent) {
    tabs.push({
      label: 'Solution',
      value: 'Solution',
      content: <ProseContent>{solutionContent}</ProseContent>,
    });
  }

  return (
    <QuestionLayoutItem
      rightButtons={
        <>{difficulty && <DifficultyBadge difficulty={difficulty} />}</>
      }
      tabs={tabs}
    />
  );
}
