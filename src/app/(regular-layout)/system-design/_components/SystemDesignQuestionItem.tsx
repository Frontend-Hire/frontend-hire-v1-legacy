import { DIFFICULTY } from '@/types/Question';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Badge } from '@/components/ui/badge';
import { SystemDesign } from '@/types/SystemDesign';
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

export default function SystemDesignQuestionItem({
  title,
  description,
  publishedOn,
}: SystemDesign) {
  return (
    <div className="flex min-h-20 items-center gap-4 overflow-hidden rounded bg-card pr-4 text-card-foreground hover:bg-card/80">
      <DifficultyLabel difficulty={DIFFICULTY.MASTER} />
      <div className="flex w-full flex-col gap-1 py-2">
        <div className="flex items-center gap-2">
          <p className="font-bold capitalize">{title}</p>
          {isNew(publishedOn) && (
            <Badge className="animate-fh-pulse">New</Badge>
          )}
        </div>
        <p className="text-sm leading-[100%] text-gray-300">{description}</p>
      </div>
    </div>
  );
}
