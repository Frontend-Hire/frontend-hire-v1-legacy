import { getCohortPages } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';
import { getMetadata } from '@/lib/getMetadata';

type CohortMainLayoutProps = {
  params: {
    cohortId: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { cohortId: string };
}) {
  const meta = await getCohortPages(params.cohortId);

  return getMetadata({
    title: `${meta?.title || 'Cohort'} | Frontend Hire`,
    description: meta?.description,
    image: meta.image,
  });
}

export default async function CohortMainLayout({
  params,
  children,
}: React.PropsWithChildren<CohortMainLayoutProps>) {
  const { chapters } = await getCohortPages(params.cohortId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
