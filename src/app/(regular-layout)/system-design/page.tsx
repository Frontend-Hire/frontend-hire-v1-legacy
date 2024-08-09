import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { DIFFICULTY } from '@/types/Question';
import SystemDesignQuestionItem from './_components/SystemDesignQuestionItem';
import Link from 'next/link';
import { getSystemDesignsFromLocal } from '@/lib/fetchLocalFiles';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'System Design | Frontend Hire',
  description: 'Our take on Frontend System Design',
  canonical: '/system-design',
});

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
              <SystemDesignQuestionItem {...system} />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
