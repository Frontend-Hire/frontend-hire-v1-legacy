import Footer from '@/components/Footer';

export default function ProjectLayout({
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
