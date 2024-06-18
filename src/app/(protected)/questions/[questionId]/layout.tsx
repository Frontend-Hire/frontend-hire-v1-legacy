import Footer from '@/components/Footer';

export default function QuestionLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
