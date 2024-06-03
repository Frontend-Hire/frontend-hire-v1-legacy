import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';
import { openGraphShared } from '@/app/shared-metadata';
import { DIFFICULTY } from '@/types/Question';
import SystemDesignQuestionItem from './_components/SystemDesignQuestionItem';
import Link from 'next/link';
import { getSystemDesignsFromLocal } from '@/lib/fetchLocalFiles';

export const metadata: Metadata = {
  title: 'System Design | Frontend Hire',
  description: 'Our take on Frontend System Design',
  openGraph: {
    ...openGraphShared,
    title: 'System Design | Frontend Hire',
    description: 'Our take on Frontend System Design',
  },
};

export default async function SystemDesignPage() {
  const systems = await getSystemDesignsFromLocal();

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="System Design"
        subTitle="Our take on Frontend System Design."
      />

      <VisuallyHidden>Frontend Design Systems List</VisuallyHidden>
      <ul className="flex flex-col gap-4">
        {systems.map((system) => (
          <li key={system.id}>
            <Link prefetch={false} href={system.link}>
              <SystemDesignQuestionItem
                title={system.title}
                description={system.description}
                difficulty={DIFFICULTY.MASTER}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
