import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';
import { QuestionDifficulty } from '@/types/Question';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import Tooltip from '../ui/tooltip';
import SkillBadges from '../SkillBadges';
import { Badge } from '../ui/badge';

type QuestionItemProps = {
  id: string;
  difficulty: QuestionDifficulty;
  title: string;
  description: string;
  skills: string[];
  isCompleted: boolean;
  isNew?: boolean;
  isFree?: boolean;
};

const DifficultyLabel = ({
  difficulty,
}: {
  difficulty: QuestionDifficulty;
}) => {
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

const CompletedBox = ({ isCompleted }: { isCompleted: boolean }) => {
  return isCompleted ? (
    <Tooltip title="Completed">
      <CheckCircleIcon size="48px" strokeWidth={2} />
    </Tooltip>
  ) : (
    <Tooltip title="Yet to solve">
      <CircleIcon size="48px" strokeWidth={2} />
    </Tooltip>
  );
};

export default function QuestionItem({
  id,
  skills = [],
  title,
  description,
  difficulty,
  isCompleted,
  isNew,
  isFree,
}: QuestionItemProps) {
  return (
    <Link prefetch={false} href={`/questions/${id}`}>
      <div className="flex min-h-20 items-center gap-4 overflow-hidden rounded bg-card pr-4 text-card-foreground hover:bg-card/80">
        <DifficultyLabel difficulty={difficulty} />
        <div className="flex w-full flex-col gap-1 py-2">
          <div className="flex items-center gap-2">
            <p className="font-bold">{title}</p>
            {isNew && (
              <Badge className="motion-safe:animate-fh-pulse">New</Badge>
            )}
            {isFree && <Badge>Free</Badge>}
          </div>
          <p className="text-sm leading-[100%] text-gray-300">{description}</p>
          <SkillBadges skills={skills} />
        </div>
        <CompletedBox isCompleted={isCompleted} />
      </div>
    </Link>
  );
}
