import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex h-full flex-col gap-4 p-2 md:px-[100px] md:py-4 lg:px-[200px] xl:px-[250px]">
        <Heading variant="h1">404: Not Found</Heading>
        <p className="muted">Oops, how did you even come here?</p>
      </main>
      <Footer />
    </>
  );
}
