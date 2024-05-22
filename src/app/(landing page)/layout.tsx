import Footer from '@/components/Footer';
import Header from './_components/Header';

export const dynamic = 'force-static';

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
