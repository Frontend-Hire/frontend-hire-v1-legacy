import { Button } from '@/components/ui/button';
import { SkillStats } from '@/types/Question';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  skillStats: SkillStats;
}

function SkillStatItem({
  skill,
  submitted,
  total,
}: {
  skill: string;
  submitted: number;
  total: number;
}) {
  return (
    <Button className="w-max text-lg font-semibold" variant="link">
      <Link className="flex items-center gap-2" href={`/questions/${skill}`}>
        <ArrowRightIcon /> {skill}: {submitted}/{total}
      </Link>
    </Button>
  );
}

export default function SkillLevelStats({ skillStats }: Props) {
  return (
    <div className="flex h-full flex-col justify-between rounded-sm bg-gray-300 p-2 ">
      <p className="text-center text-lg font-medium">
        Skill Level Questions Submitted
      </p>

      <SkillStatItem
        skill="HTML"
        submitted={skillStats['HTML'].submitted}
        total={skillStats['HTML'].total}
      />
      <SkillStatItem
        skill="CSS"
        submitted={skillStats['CSS'].submitted}
        total={skillStats['CSS'].total}
      />
      <SkillStatItem
        skill="JavaScript"
        submitted={skillStats['JavaScript'].submitted}
        total={skillStats['JavaScript'].total}
      />
      <SkillStatItem
        skill="React"
        submitted={skillStats['React'].submitted}
        total={skillStats['React'].total}
      />
    </div>
  );
}
