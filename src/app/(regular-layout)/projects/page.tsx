import VisuallyHidden from '@/components/ui/visually-hidden';
import { Metadata } from 'next';
import Container from './_components/Container';
import { Suspense } from 'react';
import ProjectItemSkeleton from '@/components/ProjectItemSkeleton';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'Projects | Frontend Hire',
  description: 'Not some stupid clones but highly feature focused projects',
  openGraph: {
    title: 'Projects | Frontend Hire',
    description: 'Not some stupid clones but highly feature focused projects',
    url: 'https://frontendhire.com/projects',
  },
};

export default async function Projects() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
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
    </main>
  );
}
