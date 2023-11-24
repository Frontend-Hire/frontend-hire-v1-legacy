'use client';

import PrimaryLayout from './_layout/PrimaryLayout';
import Header from './_components/Header';
import ProjectLayoutItem from '@/components/ProjectLayoutItem';
import useProject from './_hooks/useProject';
import ResetProgressButtonWithAlert from './_components/ResetProgressButtonWithAlert';

export default function ProjectPage() {
  const { data } = useProject();

  if (data.status === 'loading' || data.status === 'idle')
    return '---------------LOADING---------------';

  if (data.status === 'error') return '---------------ERROR---------------';

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
              <div className="prose max-w-none p-4">
                {data.project.getContent()}
              </div>
            ),
          },
        ]}
      />
    </PrimaryLayout>
  );
}
