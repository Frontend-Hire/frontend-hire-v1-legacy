import { ScrollArea } from '@/components/ui/scroll-area';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import Link from 'next/link';
import { QuestionDifficulty } from '@/types/Question';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Badge } from '@/components/ui/badge';
import SkillBadges from '@/components/SkillBadges';

export default async function QuestionsFeature() {
  const questions = await getQuestionsFromLocal();

  return (
    <ScrollArea className="h-[250px] w-full rounded">
      <ul className="space-y-4">
        {questions.map((q) => (
          <li key={q.id}>
            <Link prefetch={false} href={`/questions/${q.id}`}>
              <QuestionItem {...q} />
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}

type QuestionItemProps = {
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

function QuestionItem({
  skills = [],
  title,
  description,
  difficulty,
  isNew,
}: QuestionItemProps) {
  return (
    <div className="flex min-h-[80px] items-center gap-4 overflow-hidden rounded-[5px] bg-card pr-4 text-card-foreground hover:bg-card/80">
      <DifficultyLabel difficulty={difficulty} />
      <div className="flex w-full flex-col gap-1 py-2 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-bold">{title}</p>
          {isNew && <Badge className="animate-pulse">New</Badge>}
        </div>
        <p className="line-clamp-1 text-sm leading-[100%] text-gray-300">
          {description}
        </p>
        <SkillBadges skills={skills} />
      </div>
    </div>
  );
}
