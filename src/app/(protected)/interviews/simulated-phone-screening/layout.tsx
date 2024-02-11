import ProtectedLayout from '@/components/ProtectedLayout';

export default function InterviewsLayout({
  children,
}: React.PropsWithChildren) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
