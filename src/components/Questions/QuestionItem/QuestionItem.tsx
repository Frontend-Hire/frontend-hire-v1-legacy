import VisuallyHidden from '@/components/ui/visually-hidden';
import { DIFFICULTY, Question } from '@/types/Question';
import { Badge } from '@/components/ui/badge';
import { isNew } from '@/utils/date';

const DifficultyLabel = ({ difficulty }: { difficulty: DIFFICULTY }) => {
  let className = 'w-4 self-stretch';

  if (difficulty == 'easy') {
    className += ' bg-easy';
  } else if (difficulty == 'medium') {
    className += ' bg-medium';
  } else if (difficulty == 'hard') {
    className += ' bg-hard';
  } else {
    className += ' bg-gray-500';
  }

  return (
    <>
      <div className={className} />
      <VisuallyHidden>{difficulty}</VisuallyHidden>
    </>
  );
};

type QuestionItemProps = {
  question: Question;
  showCompleted?: boolean;
  isCompleted?: boolean;
};

export default function QuestionItem({
  question,
  isCompleted,
}: QuestionItemProps) {
  const { title, description, difficulty, publishedOn, isFree } = question;
  return (
    <div className="flex min-h-20 items-center gap-4 overflow-hidden rounded bg-card pr-4 text-card-foreground hover:bg-card/80">
      <DifficultyLabel difficulty={difficulty} />
      <div className="flex w-full flex-col gap-1 py-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bold">{title}</p>
            <div className="flex items-center gap-2">
              {isNew(publishedOn) && (
                <Badge className="motion-safe:animate-fh-pulse">New</Badge>
              )}
              {isFree && <Badge>Free</Badge>}
            </div>
          </div>
          {isCompleted && (
            <Badge className="bg-green-700 hover:bg-green-800">Completed</Badge>
          )}
        </div>
        <p className="text-sm leading-relaxed text-gray-300">{description}</p>
      </div>
    </div>
  );
}
