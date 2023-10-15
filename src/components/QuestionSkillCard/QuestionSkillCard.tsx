import Link from 'next/link';
import Heading from '@/components/Heading';

interface Props {
  skill: string;
  description?: string;
  noOfQuestions: number;
}

export default function QuestionSkillCard({
  skill,
  description,
  noOfQuestions,
}: Props) {
  return (
    <Link
      href={`/questions/${skill}`}
      className="flex min-h-[150px] min-w-[250px] flex-col items-center justify-around rounded-lg border p-2 text-center shadow-sm hover:bg-gray-100"
    >
      <Heading variant="h3">{skill}</Heading>
      <p>{description}</p>
      <p>{noOfQuestions} Questions</p>
    </Link>
  );
}
