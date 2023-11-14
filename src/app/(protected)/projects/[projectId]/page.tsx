'use client';

import PrimaryLayout from './_layout/PrimaryLayout';
import Header from './_components/Header';
import ProjectLayoutItem from '@/components/ProjectLayoutItem';
import useProject from './_hooks/useProject';

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  const { data } = useProject(projectId);

  if (data.status === 'loading' || data.status === 'idle')
    return '---------------LOADING---------------';

  if (data.status === 'error') return '---------------ERROR---------------';

  return (
    <PrimaryLayout header={<Header />}>
      <ProjectLayoutItem
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
