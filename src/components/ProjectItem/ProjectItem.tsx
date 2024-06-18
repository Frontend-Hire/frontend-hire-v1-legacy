import { ProjectDifficulty } from '@/types/Project';
import VisuallyHidden from '../ui/visually-hidden';
import Link from 'next/link';
import {
  GemIcon,
  LayoutListIcon,
  ListChecksIcon,
  ListTodoIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import SkillBadges from '../SkillBadges';

type ProjectItemProps = {
  id: string;
  title: string;
  description: string;
  difficulty: ProjectDifficulty;
  tasks: string[];
  skills: string[];
  isRecommended?: boolean;
  isSubmitted?: boolean;
  completedTasks?: number[];
};

export default function ProjectItem({
  id,
  title,
  description,
  difficulty,
  tasks,
  skills,
  isRecommended = false,
  isSubmitted = false,
  completedTasks = [],
}: ProjectItemProps) {
  const renderIcon = () => {
    if (completedTasks.length === tasks.length) {
      return <ListChecksIcon />;
    }

    if (completedTasks.length === 0) {
      return <LayoutListIcon />;
    }

    return <ListTodoIcon />;
  };

  const renderTasksLengthText = () => {
    if (completedTasks.length > 0) {
      return `${completedTasks.length} / ${tasks.length}`;
    }

    return tasks.length;
  };

  const renderActionButton = () => {
    if (isSubmitted) {
      return (
        <Button asChild variant="outline">
          <Link prefetch={false} href={`/projects/${id}`}>
            Revist
          </Link>
        </Button>
      );
    }

    if (completedTasks.length === 0) {
      return (
        <Button asChild>
          <Link prefetch={false} href={`/projects/${id}`}>
            Start
          </Link>
        </Button>
      );
    }

    return (
      <Button asChild variant="secondary">
        <Link prefetch={false} href={`/projects/${id}`}>
          Continue
        </Link>
      </Button>
    );
  };

  return (
    <div className="flex h-full min-h-[300px] flex-col gap-2 overflow-hidden rounded-md bg-card text-card-foreground">
      <DifficultyLabel isRecommended={isRecommended} difficulty={difficulty} />
      <div className="flex grow flex-col gap-1 px-4">
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        <p className="grow text-sm text-gray-300">{description}</p>
        <SkillBadges skills={skills} />
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
