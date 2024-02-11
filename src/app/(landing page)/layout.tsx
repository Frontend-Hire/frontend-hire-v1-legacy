import Header from '@/components/Header';
import Footer from './_components/Footer';

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
