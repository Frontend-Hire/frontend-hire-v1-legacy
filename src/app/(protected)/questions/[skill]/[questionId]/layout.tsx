import Footer from '@/components/Footer';

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer className="bg-gray-400 text-[10px] text-white" />
    </>
  );
}
