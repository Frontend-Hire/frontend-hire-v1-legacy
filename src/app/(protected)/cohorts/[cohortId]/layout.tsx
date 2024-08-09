import { getCohortPages } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';

type CohortMainLayoutProps = {
  params: {
    cohortId: string;
  };
};

export default async function CohortMainLayout({
  params,
  children,
}: React.PropsWithChildren<CohortMainLayoutProps>) {
  const { chapters } = await getCohortPages(params.cohortId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
