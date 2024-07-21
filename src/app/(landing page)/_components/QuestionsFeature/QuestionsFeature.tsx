import QuestionTypeCard from '@/components/Questions/QuestionTypeCard';
import Link from 'next/link';

export default function QuestionsFeature() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Link prefetch={false} href={'/questions/css/coding'}>
        <QuestionTypeCard
          className="hover:bg-[hsl(203,66%,54%)]"
          title="CSS Coding"
        />
      </Link>
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
  );
}
