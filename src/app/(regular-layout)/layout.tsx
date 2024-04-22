import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RegularLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container min-h-[calc(100svh-56px)] grow py-2 md:py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
