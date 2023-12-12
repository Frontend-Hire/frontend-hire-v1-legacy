import Footer from '@/components/Footer';

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer className="text-[10px]" />
    </>
  );
}
