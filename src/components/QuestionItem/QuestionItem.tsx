import Link from 'next/link';
import VisuallyHidden from '../VisuallyHidden';
import Tooltip from '../Tooltip';
import { Checkbox } from '../ui/checkbox';

interface Props {
  id: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  title: string;
  skill: string;
  isCompleted: boolean;
  isFavorite: boolean;
}

const DifficultyLabel = ({
  difficulty,
}: {
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}) => {
  let className = 'flex flex-col w-2 h-full';

  if (difficulty == 'EASY') {
    className += ' bg-green-600';
  } else if (difficulty == 'MEDIUM') {
    className += ' bg-yellow-500';
  } else {
    className += ' bg-red-600';
  }

  return (
    <>
      <div className={className} />
      <VisuallyHidden>{difficulty}</VisuallyHidden>
    </>
  );
};

export default function QuestionItem({
  id,
  skill,
  title,
  difficulty,
  isCompleted,
  isFavorite,
}: Props) {
  return (
    <div className="flex h-10 min-w-[200px] items-center gap-2 overflow-hidden rounded-md border border-gray-900">
      <DifficultyLabel difficulty={difficulty} />
      <Tooltip title="Submit a solution to mark as completed">
        <Checkbox checked={isCompleted} />
      </Tooltip>
      <Link href={`/questions/${skill}/${id}`}>
        <p className="text-xl">{title}</p>
      </Link>
    </div>
  );
}
