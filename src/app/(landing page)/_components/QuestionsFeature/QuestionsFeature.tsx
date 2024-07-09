import Link from 'next/link';

export default function QuestionsFeature() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Link prefetch={false} href={'/questions/react/coding'}>
        <QuestionTypeCard title="React Coding" />
      </Link>
      <Link prefetch={false} href={'/questions/react/theory'}>
        <QuestionTypeCard title="React Theory" />
      </Link>
    </div>
  );
}

type QuestionTypeCardProps = {
  title: string;
};

function QuestionTypeCard({ title }: QuestionTypeCardProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded bg-card p-5 text-center text-2xl font-bold transition-all hover:scale-105 hover:bg-[hsl(192,82%,34%)]">
      {title}
    </div>
  );
}
