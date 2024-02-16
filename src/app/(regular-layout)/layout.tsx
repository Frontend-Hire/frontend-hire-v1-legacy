import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RegularLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="grow p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
