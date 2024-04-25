import { ProjectDifficulty } from '@/types/Project';
import Link from 'next/link';
import { GemIcon, LayoutListIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillBadges from '@/components/SkillBadges';
import VisuallyHidden from '@/components/ui/visually-hidden';

type ProjectItemProps = {
  id: string;
  title: string;
  description: string;
  difficulty: ProjectDifficulty;
  tasks: string[];
  skills: string[];
  isRecommended?: boolean;
};

export default function ProjectItem({
  id,
  title,
  description,
  difficulty,
  tasks,
  skills,
  isRecommended = false,
}: ProjectItemProps) {
  const renderIcon = () => {
    return <LayoutListIcon />;
  };

  const renderTasksLengthText = () => {
    return tasks.length;
  };

  const renderActionButton = () => {
    return (
      <Button size="sm" asChild>
        <Link href={`/projects/${id}`}>Start</Link>
      </Button>
    );
  };

  return (
    <div className="flex min-h-full flex-col gap-2 overflow-hidden rounded-md bg-card text-card-foreground">
      <DifficultyLabel isRecommended={isRecommended} difficulty={difficulty} />
      <div className="flex grow flex-col gap-1 px-4 text-sm">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="line-clamp-1 grow text-sm text-gray-300">{description}</p>
        <SkillBadges skills={skills.slice(0, 2)} />
      </div>
      <div className="flex items-center justify-between p-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          {renderIcon()}
          {renderTasksLengthText()}
        </div>
        {renderActionButton()}
      </div>
    </div>
  );
}

function DifficultyLabel({
  difficulty,
  isRecommended = false,
}: {
  difficulty: ProjectDifficulty;
  isRecommended?: boolean;
}) {
  let className = 'w-full flex items-center justify-center h-4';

  if (difficulty == 'easy') {
    className += ' bg-easy';
  } else if (difficulty == 'medium') {
    className += ' bg-medium text-black';
  } else if (difficulty == 'hard') {
    className += ' bg-hard';
  } else {
    className += ' bg-gray-600';
  }

  return (
    <div className={className}>
      <VisuallyHidden>{difficulty}</VisuallyHidden>
      {isRecommended && (
        <span className="flex items-center gap-2">
          <GemIcon size={14} />
          <span className="text-xs font-bold tracking-wide">Recommended</span>
          <GemIcon size={14} />
        </span>
      )}
    </div>
  );
}
