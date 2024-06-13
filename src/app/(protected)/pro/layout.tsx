import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';

export default function RegularLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <PremiumProtectedContentLayout>
        <main className="container min-h-[calc(100svh-56px)] grow py-2 md:py-4">
          {children}
        </main>
      </PremiumProtectedContentLayout>
      <Footer />
    </>
  );
}
