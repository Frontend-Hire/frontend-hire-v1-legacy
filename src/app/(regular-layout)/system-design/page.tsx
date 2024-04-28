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
          <Link href="/system-design/portfolio-website-with-blog-and-newsletter/overview">
            <SystemDesignQuestionItem
              title="Design a Portfolio Website with Blog and Newsletter"
              description="A pretty common system thought by every developer."
              difficulty={DIFFICULTY.MASTER}
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <SystemDesignQuestionItem
              title="Design a PDF Invoice Generator"
              description="PDFs are always a pain to generate. How would you design a system to generate PDF invoices?"
              difficulty={DIFFICULTY.MASTER}
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <SystemDesignQuestionItem
              title="Design a Blog like Medium"
              description="A complex system design with multi tenancy."
              difficulty={DIFFICULTY.MASTER}
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <SystemDesignQuestionItem
              title="Design a video meeting platform like Google Meet"
              description="How complex can it be to design a video meeting platform?"
              difficulty={DIFFICULTY.MASTER}
            />
          </Link>
        </li>
      </ul>
    </article>
  );
}
