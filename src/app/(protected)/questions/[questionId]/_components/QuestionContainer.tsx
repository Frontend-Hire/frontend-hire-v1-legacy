import DifficultyBadge from '@/components/DifficultyBadge';
import QuestionLayoutItem from '@/components/QuestionLayoutItem';
import { QuestionDifficulty } from '@/types/Question';

interface Props {
  content: React.ReactNode;
  difficulty?: QuestionDifficulty;
}

export default function QuestionContainer({ content, difficulty }: Props) {
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
