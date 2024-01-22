import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RegularLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
