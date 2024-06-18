import Footer from '@/components/Footer';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <Footer isCompact />
    </>
  );
}
