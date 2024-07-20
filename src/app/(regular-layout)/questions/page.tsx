import { getMetadata } from '@/lib/getMetadata';
import CustomHeading from '@/components/CustomHeading';
import Link from 'next/link';
import QuestionTypeCard from '@/components/Questions/QuestionTypeCard';

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
        <Link prefetch={false} href={'/questions/javascript/coding'}>
          <QuestionTypeCard
            className="hover:bg-[hsl(52,84%,63%)] hover:text-black"
            title="JavaScript Coding"
          />
        </Link>
        <Link prefetch={false} href={'/questions/react/coding'}>
          <QuestionTypeCard
            className="hover:bg-[hsl(192,82%,34%)]"
            title="React Coding"
          />
        </Link>
        <Link prefetch={false} href={'/questions/react/theory'}>
          <QuestionTypeCard
            className="hover:bg-[hsl(192,82%,34%)]"
            title="React Theory"
          />
        </Link>
      </div>
    </article>
  );
}
