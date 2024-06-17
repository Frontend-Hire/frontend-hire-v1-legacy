import Sidebar from './_components/Sidebar';
import { getSystemDesign } from '@/lib/fetchLocalFiles';

type SystemDesignLayoutProps = {
  params: {
    questionId: string;
  };
};

export default async function SystemDesignLayout({
  params,
  children,
}: React.PropsWithChildren<SystemDesignLayoutProps>) {
  const { chapters } = await getSystemDesign(params.questionId);

  return (
    <main className="container flex h-full flex-col gap-4 py-2 md:flex-row md:gap-[30px] md:py-4">
      <Sidebar pages={Object.entries(chapters)} />
      {children}
    </main>
  );
}
