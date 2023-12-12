'use client';

import PrimaryLayout from './_layout/PrimaryLayout';
import Header from './_components/Header';
import ProjectLayoutItem from '@/components/ProjectLayoutItem';
import useProject from './_hooks/useProject';
import ResetProgressButtonWithAlert from './_components/ResetProgressButtonWithAlert';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import ProjectLayoutSkeleton from '@/components/ProjectLayoutSkeleton';

export default function ProjectPage() {
  const { data } = useProject();

  if (data.status === 'loading' || data.status === 'idle')
    return (
      <PrimaryLayout header={<HeaderSkeleton />}>
        <ProjectLayoutSkeleton />
      </PrimaryLayout>
    );

  if (data.status === 'error') {
    throw new Error(data.message);
  }

  if (data.project == undefined) {
    throw new Error('This was unexepected');
  }

  return (
    <PrimaryLayout header={<Header />}>
      <ProjectLayoutItem
        rightButtons={
          <>
            <ResetProgressButtonWithAlert />
          </>
        }
        tabs={[
          {
            label: 'Project',
            value: 'Project',
            content: (
              <div className="prose prose-invert max-w-none bg-[#151515] p-4">
                {data.project.getContent()}
              </div>
            ),
          },
        ]}
      />
    </PrimaryLayout>
  );
}
