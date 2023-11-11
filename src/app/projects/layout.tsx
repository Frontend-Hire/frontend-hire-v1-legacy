import Header from '@/components/Header';

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
