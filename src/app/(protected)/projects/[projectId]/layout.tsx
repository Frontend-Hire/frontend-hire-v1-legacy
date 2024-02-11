import ProtectedLayout from '@/components/ProtectedLayout';

export default function Layout({ children }: React.PropsWithChildren) {
  return <ProtectedLayout showHeader={false}>{children}</ProtectedLayout>;
}
