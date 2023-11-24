import { ProjectDifficulty } from '@/types/Project';
import VisuallyHidden from '../ui/visually-hidden';
import Link from 'next/link';
import { LayoutListIcon, ListChecksIcon, ListTodoIcon } from 'lucide-react';

interface Props {
  id: string;
  title: string;
  difficulty: ProjectDifficulty;
  tasks: string[];
  isSubmitted?: boolean;
  completedTasks?: number[];
}

export default function ProjectItem({
  id,
  title,
  difficulty,
  tasks,
  isSubmitted = false,
  completedTasks = [],
}: Props) {
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

  const renderLinkText = () => {
    if (isSubmitted) {
      return 'Check';
    }

    if (completedTasks.length === 0) {
      return 'Start';
    }

    return 'Continue';
  };

  return (
    <div className="flex h-[200px] w-[200px] flex-col overflow-hidden rounded-md bg-primary text-primary-foreground">
      <DifficultyLabel difficulty={difficulty} />
      <div className="flex grow flex-col justify-between gap-2 p-2">
        <h2 className="text-center">{title}</h2>
        <ul className="ml-2 list-inside list-disc text-sm">
          {tasks.slice(0, 4).map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-2">
            {renderIcon()}
            {renderTasksLengthText()}
          </div>
          <Link
            href={`/projects/${id}`}
            className="flex h-[25px] min-w-[75px] items-center justify-center rounded-full bg-secondary text-primary"
          >
            {renderLinkText()}
          </Link>
        </div>
      </div>
    </div>
  );
}

function DifficultyLabel({ difficulty }: { difficulty: ProjectDifficulty }) {
  let className = 'w-full h-[20px]';

  if (difficulty == 'easy') {
    className += ' bg-green-500';
  } else if (difficulty == 'medium') {
    className += ' bg-yellow-500';
  } else if (difficulty == 'hard') {
    className += ' bg-red-500';
  } else {
    className += ' bg-gray-500';
  }

  return (
    <div className={className}>
      <VisuallyHidden>{difficulty}</VisuallyHidden>
    </div>
  );
}
