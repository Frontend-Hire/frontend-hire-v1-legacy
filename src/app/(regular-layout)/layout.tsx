import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RegularLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container grow py-[10px] md:py-[20px]">{children}</main>
      <Footer />
    </>
  );
}
