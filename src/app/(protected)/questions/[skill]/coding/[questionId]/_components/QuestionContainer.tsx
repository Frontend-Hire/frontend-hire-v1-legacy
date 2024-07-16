import DifficultyBadge from '@/components/DifficultyBadge';
import QuestionLayoutItem from '@/components/Questions/QuestionLayoutItem';
import { Question } from '@/types/Question';

type QuestionContainerProps = {
  difficulty: Question['difficulty'];
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
        <div className="prose prose-invert max-w-none p-4 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
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
        <div className="prose prose-invert max-w-none p-4 prose-h2:mt-5 prose-code:rounded prose-code:bg-primary/80 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
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
