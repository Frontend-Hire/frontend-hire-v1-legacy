'use client';

import HeaderSkeleton from '@/components/HeaderSkeleton';
import useProject from '../_hooks/useProject';
import PrimaryLayout from '../_layout/PrimaryLayout';
import ProjectLayoutSkeleton from '@/components/ProjectLayoutSkeleton';
import Header from './Header';
import ProjectLayoutItem from '@/components/ProjectLayoutItem';
import ResetProgressButtonWithAlert from './ResetProgressButtonWithAlert';

export default function ClientContainer() {
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
        rightButtons={<ResetProgressButtonWithAlert />}
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
