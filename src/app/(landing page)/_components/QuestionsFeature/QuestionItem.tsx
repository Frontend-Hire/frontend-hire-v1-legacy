import { QuestionDifficulty } from '@/types/Question';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Badge } from '@/components/ui/badge';
import SkillBadges from '@/components/SkillBadges';
import Link from 'next/link';

type QuestionItemProps = {
  id: string;
  difficulty: QuestionDifficulty;
  title: string;
  description: string;
  skills: string[];
  isNew?: boolean;
};

const DifficultyLabel = ({
  difficulty,
}: {
  difficulty: QuestionDifficulty;
}) => {
  let className = 'w-2 self-stretch';

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

export default function QuestionItem({
  id,
  skills = [],
  title,
  description,
  difficulty,
  isNew,
}: QuestionItemProps) {
  return (
    <div className="flex min-h-20 items-center gap-4 overflow-hidden rounded bg-card pr-4 text-card-foreground hover:bg-card/80">
      <DifficultyLabel difficulty={difficulty} />
      <div className="flex w-full flex-col gap-1 py-2 text-sm">
        <div className="flex items-center gap-2">
          <Link
            className="w-fit underline"
            prefetch={false}
            href={`/questions/${id}`}
          >
            <p className="font-bold">{title}</p>
          </Link>
          {isNew && <Badge className="animate-fh-pulse">New</Badge>}
        </div>
        <p className="line-clamp-1 text-sm leading-[100%] text-gray-300">
          {description}
        </p>
        <SkillBadges skills={skills} />
      </div>
    </div>
  );
}
