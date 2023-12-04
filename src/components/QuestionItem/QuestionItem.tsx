import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';
import { QuestionDifficulty } from '@/types/Question';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import Tooltip from '../ui/tooltip';
import { cn } from '@/lib/utils';

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

const SKILL_CLASS: { [skill: string]: { className: string; label: string } } = {
  HTML: { className: 'bg-[#E44D26] text-white', label: 'HTML' },
  CSS: { className: 'bg-[#2062AF] text-white', label: 'CSS' },
  JS: { className: 'bg-[#F0DB4F] text-black', label: 'js' },
  REACT: { className: 'bg-[#61DAFB] text-black', label: 'React' },
  JEST: { className: 'bg-[#99425B] text-white', label: 'JEST' },
};

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-[5px] px-[4px] py-[2px] text-xs font-medium leading-[100%]',
        SKILL_CLASS[skill.toUpperCase()].className,
      )}
    >
      {SKILL_CLASS[skill.toUpperCase()].label}
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
  skills = [],
  title,
  description,
  difficulty,
  isCompleted,
}: Props) {
  return (
    <Link href={`/questions/${id}`}>
      <div className="flex min-h-[80px] items-center gap-[20px] overflow-hidden rounded-[5px] bg-card pr-[20px] text-card-foreground">
        <DifficultyLabel difficulty={difficulty} />
        <div className="flex w-full flex-col gap-[5px] py-[10px]">
          <p className="font-bold">{title}</p>
          <p className="text-sm leading-[100%] text-muted">{description}</p>
          <div className="flex gap-[10px]">
            {skills.sort().map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
        <CompletedBox isCompleted={isCompleted} />
      </div>
    </Link>
  );
}
