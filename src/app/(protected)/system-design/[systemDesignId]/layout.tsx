import { Metadata } from 'next';
import Sidebar from './_components/Sidebar';
import { getSystemDesign } from '@/lib/fetchLocalFiles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  return (
    <>
      <Header />
      <main className="md:gap8 container flex h-full flex-col gap-4 py-2 md:flex-row md:py-4">
        <Sidebar pages={Object.entries(chapters)} />
        {children}
      </main>
      <Footer isCompact />
    </>
  );
}
