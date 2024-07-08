import { getSystemDesign } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';
import { getMetadata } from '@/lib/getMetadata';

type SystemDesignLayoutProps = {
  params: {
    systemDesignId: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { systemDesignId: string };
}) {
  const meta = await getSystemDesign(params.systemDesignId);

  return getMetadata({
    title: `${meta?.title || 'System Design'} | Frontend Hire`,
    description: meta?.description,
  });
}

export default async function SystemDesignLayout({
  params,
  children,
}: React.PropsWithChildren<SystemDesignLayoutProps>) {
  const { chapters } = await getSystemDesign(params.systemDesignId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
