import Link from 'next/link';
import VisuallyHidden from '../ui/visually-hidden';
import { QuestionDifficulty } from '@/types/Question';

interface Props {
  id: string;
  difficulty: QuestionDifficulty;
  title: string;
  skill: string;
  isCompleted: boolean;
  isFavorite: boolean;
}

const DifficultyLabel = ({
  difficulty,
}: {
  difficulty: QuestionDifficulty;
}) => {
  let className = 'flex flex-col w-2 h-full';

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
    <Link href={`/questions/${skill}/${id}`}>
      <div className="flex h-10 min-w-[200px] items-center gap-2 overflow-hidden rounded-md border border-gray-900 bg-white hover:bg-gray-100">
        <DifficultyLabel difficulty={difficulty} />
        <p className="text-xl">{title.split('_').join(' ')}</p>
      </div>
    </Link>
  );
}
