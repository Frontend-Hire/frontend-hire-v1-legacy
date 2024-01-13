import { Metadata } from 'next';
import ClientContainer from './_components/ClientContainer';
import getProjectMetaData from './_utils/getProjectMetaData';

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
      title: `${projectData?.meta.title || 'Project'} | Frontend Hire`,
      description: projectData?.meta.description,
    },
  };
}

export default function ProjectPage() {
  return <ClientContainer />;
}
