import { getMetadata } from '@/lib/getMetadata';
import CustomHeading from '@/components/CustomHeading';
import Link from 'next/link';

export const metadata = getMetadata({
  title: 'Questions | Frontend Hire',
  description: 'Questions meant for real world and interview based scenarios.',
});

export default function Questions() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Questions"
        subTitle="Meant for real world and interview based scenarios."
      />
      <div className="grid grid-cols-2 gap-10">
        <Link prefetch={false} href={'/questions/react/coding'}>
          <QuestionTypeCard title="React Coding" />
        </Link>
        <Link prefetch={false} href={'/questions/react/theory'}>
          <QuestionTypeCard title="React Theory" />
        </Link>
      </div>
    </article>
  );
}

type QuestionTypeCardProps = {
  title: string;
};

function QuestionTypeCard({ title }: QuestionTypeCardProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded bg-card p-5 text-2xl font-bold transition-all hover:scale-105 hover:bg-[hsl(192,82%,34%)]">
      {title}
    </div>
  );
}
