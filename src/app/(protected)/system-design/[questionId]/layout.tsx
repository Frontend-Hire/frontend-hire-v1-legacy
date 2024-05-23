import ProtectedLayout from '@/components/ProtectedLayout';
import Sidebar from './_components/Sidebar';
import { getSystemDesign } from '@/lib/fetchLocalFiles';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';

type SystemDesignLayoutProps = {
  params: {
    questionId: string;
  };
};

export default async function SystemDesignLayout({
  params,
  children,
}: React.PropsWithChildren<SystemDesignLayoutProps>) {
  const { chapters, isPro } = await getSystemDesign(params.questionId);

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
