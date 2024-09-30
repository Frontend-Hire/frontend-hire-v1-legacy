import CustomHeading from '@/components/CustomHeading';
import QuestionTypeCard from '@/components/Questions/QuestionTypeCard';
import { QUESTION_CATEGORIES } from '@/config/questionCategories';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getMetadata } from '@/lib/getMetadata';
import Link from 'next/link';

export const metadata = getMetadata({
  title: 'Questions | Frontend Hire',
  description: 'Questions meant for real world and interview based scenarios.',
  canonical: '/questions',
});

export default async function Questions() {
  const totalQuestionsMap: Record<string, number> = {};

  await Promise.all(
    QUESTION_CATEGORIES.map(async (category) => {
      const questions = await getQuestionsFromLocal(
        category.skill,
        category.type,
      );
      totalQuestionsMap[category.id] = questions.length;
    }),
  );

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
                totalQuestions={totalQuestionsMap[category.id]}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
