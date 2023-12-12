import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';
import { QuestionDifficulty } from '@/types/Question';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import Tooltip from '../ui/tooltip';
import SkillBadges from '../SkillBadges';

interface Props {
  id: string;
  difficulty: QuestionDifficulty;
  title: string;
  description: string;
  skills: string[];
  isCompleted: boolean;
}

const DifficultyLabel = ({
  difficulty,
}: {
  difficulty: QuestionDifficulty;
}) => {
  let className = 'w-[20px] self-stretch';

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
}: Props) {
  return (
    <Link href={`/questions/${id}`}>
      <div className="flex min-h-[80px] items-center gap-[20px] overflow-hidden rounded-[5px] bg-card pr-[20px] text-card-foreground hover:bg-card/80">
        <DifficultyLabel difficulty={difficulty} />
        <div className="flex w-full flex-col gap-[5px] py-[10px]">
          <p className="font-bold">{title}</p>
          <p className="text-sm leading-[100%] text-muted">{description}</p>
          <SkillBadges skills={skills} />
        </div>
        <CompletedBox isCompleted={isCompleted} />
      </div>
    </Link>
  );
}
