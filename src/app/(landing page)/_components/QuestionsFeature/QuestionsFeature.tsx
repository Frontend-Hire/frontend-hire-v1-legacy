import QuestionTypeCard from '@/components/Questions/QuestionTypeCard';
import { QUESTION_CATEGORIES } from '@/config/questionCategories';
import Link from 'next/link';

export default function QuestionsFeature() {
  return (
    <ul className="grid grid-cols-2 gap-5">
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
  );
}
