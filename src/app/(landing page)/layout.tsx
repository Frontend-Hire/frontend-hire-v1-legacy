import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import Header from './_components/Header';

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {/*<Header />*/}
      {children}
      <Footer />
    </>
  );
}
