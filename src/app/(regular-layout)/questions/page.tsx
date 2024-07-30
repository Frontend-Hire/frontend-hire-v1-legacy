import { getMetadata } from '@/lib/getMetadata';
import CustomHeading from '@/components/CustomHeading';
import Link from 'next/link';
import QuestionTypeCard from '@/components/Questions/QuestionTypeCard';
import { QUESTION_CATEGORIES } from '@/config/questionCategories';

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
      <ul className="grid grid-cols-2 gap-10">
        {QUESTION_CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link prefetch={false} href={`/questions/${category.id}`}>
              <QuestionTypeCard
                className={category.className}
                title={category.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
