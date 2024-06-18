import ContentSidebar from '../ContentSidebar';
import Footer from '../Footer';
import Header from '../Header';

type ContentLayoutProps = {
  chapters: Record<string, string>;
};

export default function ContentLayout({
  chapters,
  children,
}: React.PropsWithChildren<ContentLayoutProps>) {
  return (
    <>
      <Header />
      <main className="container flex h-full flex-col gap-4 py-2 md:flex-row md:gap-8 md:py-4">
        <ContentSidebar pages={Object.entries(chapters)} />

        {children}
      </main>
      <Footer isCompact />
    </>
  );
}
