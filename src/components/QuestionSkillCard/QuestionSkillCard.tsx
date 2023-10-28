import Link from 'next/link';
import Heading from '@/components/Heading';
import { SKILL_DESCRIPTION_MAP } from '@/lib/constants';

interface Props {
  skill: string;
  noOfQuestions: number;
}

export default function QuestionSkillCard({ skill, noOfQuestions }: Props) {
  return (
    <Link
      href={`/questions/${skill}`}
      className="flex min-h-[150px] min-w-[250px] flex-col items-center justify-around rounded-lg border bg-white p-2 text-center shadow-sm hover:bg-gray-100"
    >
      <Heading variant="h3">{skill}</Heading>
      <p>{SKILL_DESCRIPTION_MAP[skill]}</p>
      <p>
        {noOfQuestions} Question{noOfQuestions > 1 ? 's' : ''}
      </p>
    </Link>
  );
}
