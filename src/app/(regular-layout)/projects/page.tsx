import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import ProjectItemSkeleton from '@/components/ProjectItemSkeleton';
import { openGraphShared } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: 'Projects | Frontend Hire',
  description:
    'Not some stupid clones but highly feature focused projects intended to break you out of the tutorial hell.',
  openGraph: {
    ...openGraphShared,
    title: 'Projects | Frontend Hire',
    description:
      'Not some stupid clones but highly feature focused projects intended to break you out of the tutorial hell.',
  },
};

export default async function Projects() {
  return (
    <>
      <VisuallyHidden>Projects List</VisuallyHidden>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectItemSkeleton key={i} />
            ))}
          </div>
        }
      >
        <Container />
      </Suspense>
    </>
  );
}
