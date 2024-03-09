import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import ProjectItemSkeleton from '@/components/ProjectItemSkeleton';
import CustomHeading from '@/components/CustomHeading';
import { openGraphShared } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: 'Projects | Frontend Hire',
  description: 'Not some stupid clones but highly feature focused projects',
  openGraph: {
    ...openGraphShared,
    title: 'Projects | Frontend Hire',
    description: 'Not some stupid clones but highly feature focused projects',
  },
};

export default async function Projects() {
  return (
    <article className="flex flex-col gap-[20px]">
      <CustomHeading
        title="Projects"
        subTitle="Not some stupid clones but highly feature focused projects"
      />

      <VisuallyHidden>Projects List</VisuallyHidden>
      <Suspense
        fallback={
          <div className="flex flex-wrap gap-[20px]">
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
          </div>
        }
      >
        <Container />
      </Suspense>
    </article>
  );
}
