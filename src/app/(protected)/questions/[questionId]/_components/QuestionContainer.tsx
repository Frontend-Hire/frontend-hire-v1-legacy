import DifficultyBadge from '@/components/DifficultyBadge';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { useQuestionData } from '../_context/QuestionDataProvider';

export default function QuestionContainer() {
  const {
    getContent,
    originalMeta: { difficulty },
    getSolutionContent,
  } = useQuestionData();

  const tabs = [
    {
      label: 'Question',
      value: 'Question',
      content: (
        <div className="prose prose-invert max-w-none bg-[#151515] p-4">
          {getContent()}
        </div>
      ),
    },
  ];

  if (getSolutionContent) {
    tabs.push({
      label: 'Solution',
      value: 'Solution',
      content: (
        <div className="prose prose-invert max-w-none bg-[#151515] p-4">
          {getSolutionContent()}
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
