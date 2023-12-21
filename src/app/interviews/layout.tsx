import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function InterviewsLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
