import { Metadata } from 'next';
import { getSystemDesign } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';

type SystemDesignLayoutProps = {
  params: {
    systemDesignId: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { systemDesignId: string };
}): Promise<Metadata> {
  const meta = await getSystemDesign(params.systemDesignId);
  return {
    title: `${meta?.title || 'System Design'} | Frontend Hire`,
    description: meta?.description,
    twitter: {
      title: `${meta?.title || 'System Design'} | Frontend Hire`,
      description: meta?.description,
    },
    openGraph: {
      title: `${meta?.title || 'System Design'} | Frontend Hire`,
      description: meta?.description,
    },
  };
}

export default async function SystemDesignLayout({
  params,
  children,
}: React.PropsWithChildren<SystemDesignLayoutProps>) {
  const { chapters } = await getSystemDesign(params.systemDesignId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
