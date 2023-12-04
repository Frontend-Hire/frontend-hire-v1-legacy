import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';
import { QuestionDifficulty } from '@/types/Question';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import Tooltip from '../ui/tooltip';

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
  let className = 'w-[20px] h-full';

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

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <div className="flex items-center justify-center rounded-[5px] px-[4px] py-[2px] text-xs font-medium">
      {skill}
    </div>
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
  skills,
  title,
  description,
  difficulty,
  isCompleted,
}: Props) {
  return (
    <Link href={`/questions/${id}`}>
      <div className="flex h-[80px] items-center gap-[20px] overflow-hidden rounded-[5px] bg-card pr-[20px] text-card-foreground">
        <DifficultyLabel difficulty={difficulty} />
        <div className="flex grow flex-col gap-[5px]">
          <p className="font-bold">{title}</p>
          <p className="text-sm text-muted">{description}</p>
          <div className="flex gap-[10px]">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
        <CompletedBox isCompleted={isCompleted} />
      </div>
    </Link>
  );
}
