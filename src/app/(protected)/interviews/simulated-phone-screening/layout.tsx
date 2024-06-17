import PremiumProtectedContentLayout from '@/components/PremiumProtectedContentLayout';
import ProtectedLayout from '@/components/ProtectedLayout';

export default function InterviewsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <ProtectedLayout>
      <PremiumProtectedContentLayout>{children}</PremiumProtectedContentLayout>
    </ProtectedLayout>
  );
}
