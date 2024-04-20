import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import QuestionItem from '@/components/QuestionItem';
import { DIFFICULTY } from '@/types/Question';
import SystemDesignQuestionItem from './_components/SystemDesignQuestionItem';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'System Design | Frontend Hire',
  description: 'Our take on Frontend System Design',
  openGraph: {
    ...openGraphShared,
    title: 'System Design | Frontend Hire',
    description: 'Our take on Frontend System Design',
  },
};

export default function SystemDesignPage() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="System Design"
        subTitle="Our take on Frontend System Design."
      />

      <VisuallyHidden>Frontend Design Systems List</VisuallyHidden>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/system-design/portfolio-website-with-blog-and-newsletter">
            <SystemDesignQuestionItem
              title="Design a Portfolio Website with Blog and Newsletter"
              description="A pretty common system thought by every developer."
              difficulty={DIFFICULTY.EASY}
            />
          </Link>
        </li>
      </ul>
    </article>
  );
}
