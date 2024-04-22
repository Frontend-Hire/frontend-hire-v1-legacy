import Footer from '@/components/Footer';
import Header from './_components/Header';

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
