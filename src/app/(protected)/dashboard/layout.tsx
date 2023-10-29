import BackButton from '@/components/BackButton';
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <BackButton />
      {children}
    </>
  );
}
