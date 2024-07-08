import DifficultyBadge from '@/components/DifficultyBadge';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { QuestionMeta } from '@/types/Question';

type QuestionContainerProps = {
  difficulty: QuestionMeta['difficulty'];
  questionContent: React.ReactNode;
  solutionContent?: React.ReactNode;
};

export default function QuestionContainer({
  difficulty,
  questionContent,
  solutionContent,
}: QuestionContainerProps) {
  const tabs = [
    {
      label: 'Question',
      value: 'Question',
      content: (
        <div className="prose prose-invert max-w-none bg-[#151515] p-4">
          {questionContent}
        </div>
      ),
    },
  ];

  if (solutionContent) {
    tabs.push({
      label: 'Solution',
      value: 'Solution',
      content: (
        <div className="prose prose-invert max-w-none bg-[#151515] p-4">
          {solutionContent}
        </div>
      ),
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
