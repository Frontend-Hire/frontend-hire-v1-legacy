import VisuallyHidden from '../ui/visually-hidden';
import { DIFFICULTY, Question } from '@/types/Question';
import { Badge } from '../ui/badge';

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

export default function QuestionItem({
  title,
  description,
  difficulty,
  isNew,
  isFree,
}: Question) {
  return (
    <div className="flex min-h-20 items-center gap-4 overflow-hidden rounded bg-card pr-4 text-card-foreground hover:bg-card/80">
      <DifficultyLabel difficulty={difficulty} />
      <div className="flex w-full flex-col gap-1 py-2">
        <div className="flex items-center gap-2">
          <p className="font-bold">{title}</p>
          {isNew && <Badge className="motion-safe:animate-fh-pulse">New</Badge>}
          {isFree && <Badge>Free</Badge>}
        </div>
        <p className="text-sm leading-relaxed text-gray-300">{description}</p>
      </div>
    </div>
  );
}
