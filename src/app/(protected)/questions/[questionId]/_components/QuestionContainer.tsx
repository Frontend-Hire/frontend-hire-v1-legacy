import DifficultyBadge from '@/components/DifficultyBadge';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { useQuestionData } from '../_context/QuestionDataProvider';

export default function QuestionContainer() {
  const {
    content,
    meta: { difficulty },
  } = useQuestionData();

  return (
    <QuestionLayoutItem
      rightButtons={
        <>{difficulty && <DifficultyBadge difficulty={difficulty} />}</>
      }
      tabs={[
        {
          label: 'Question',
          value: 'Question',
          content: (
            <div className="prose prose-invert max-w-none bg-[#151515] p-4">
              {content}
            </div>
          ),
        },
      ]}
    />
  );
}
