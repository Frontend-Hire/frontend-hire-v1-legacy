import CustomHeading from '@/components/CustomHeading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import CohortCardItem from './_components/CohortCardItem';
import Link from 'next/link';
import { getCohortsFromLocal } from '@/lib/fetchLocalFiles';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Cohorts | Frontend Hire',
  description: 'Practical cohorts meant to help you get started with Frontend.',
  canonical: '/cohorts',
});

export default async function CohortsPage() {
  const cohorts = await getCohortsFromLocal();

  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Cohorts"
        subTitle="Practical cohorts meant to help you get started with Frontend."
      />

      <VisuallyHidden>Cohorts List</VisuallyHidden>
      <ul className="grid justify-items-center gap-4">
        {cohorts
          .filter((cohort) => cohort.isPublished)
          .map((cohort, index) => (
            <li key={index}>
              <Link prefetch={false} href={cohort.link}>
                <CohortCardItem {...cohort} />
              </Link>
            </li>
          ))}
      </ul>
    </article>
  );
}
