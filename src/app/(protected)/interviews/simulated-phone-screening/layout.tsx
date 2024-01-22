import ProtectedLayout from '@/components/ProtectedLayout';

export default function InterviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
