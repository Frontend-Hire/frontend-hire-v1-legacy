import ProtectedLayout from '@/components/ProtectedLayout';

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
