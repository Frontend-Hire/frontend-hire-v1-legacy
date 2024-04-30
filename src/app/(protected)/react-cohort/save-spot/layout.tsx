import ProtectedLayout from '@/components/ProtectedLayout';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <ProtectedLayout
      headline="We would need to collect your email!"
      message="So, sign in for free with your Google account."
      showFooter
      isFooterCompact={false}
    >
      {children}
    </ProtectedLayout>
  );
}
