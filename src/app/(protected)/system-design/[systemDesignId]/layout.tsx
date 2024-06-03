import ProtectedLayout from '@/components/ProtectedLayout';
import Sidebar from './_components/Sidebar';
import { getSystemDesign } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import { Metadata } from 'next';

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
  const { chapters, isPro } = await getSystemDesign(params.systemDesignId);

  return (
    <ProtectedLayout>
      <main className="container flex h-full flex-col gap-4 py-2 md:flex-row md:gap-[30px] md:py-4">
        <Sidebar pages={Object.entries(chapters)} />
        {isPro ? (
          <PremiumProtectedContentLayout>
            {children}
          </PremiumProtectedContentLayout>
        ) : (
          children
        )}
      </main>
    </ProtectedLayout>
  );
}
