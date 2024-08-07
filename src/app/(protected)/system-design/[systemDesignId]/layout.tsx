import { getSystemDesign } from '@/lib/fetchLocalFiles';
import ContentLayout from '@/components/ContentLayout';

type SystemDesignLayoutProps = {
  params: {
    systemDesignId: string;
  };
};

export default async function SystemDesignLayout({
  params,
  children,
}: React.PropsWithChildren<SystemDesignLayoutProps>) {
  const { chapters } = await getSystemDesign(params.systemDesignId);

  return <ContentLayout chapters={chapters}>{children}</ContentLayout>;
}
