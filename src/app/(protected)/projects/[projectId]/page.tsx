import { Metadata } from 'next';
import ClientContainer from './_components/ClientContainer';
import getProjectMetaData from './_utils/getProjectMetaData';
import { openGraphShared } from '@/app/shared-metadata';
import ProtectedLayout from '@/components/ProtectedLayout';

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const projectData = await getProjectMetaData(params.projectId);
  return {
    title: `${projectData?.meta.title || 'Project'} | Frontend Hire`,
    description: projectData?.meta.description,
    openGraph: {
      ...openGraphShared,
      title: `${projectData?.meta.title || 'Project'} | Frontend Hire`,
      description: projectData?.meta.description,
    },
  };
}

export default function ProjectPage() {
  return (
    <ProtectedLayout>
      <ClientContainer />
    </ProtectedLayout>
  );
}
