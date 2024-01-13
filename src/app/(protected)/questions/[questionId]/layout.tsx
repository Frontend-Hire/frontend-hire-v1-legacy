import ProtectedLayout from '@/components/ProtectedLayout';

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout showHeader={false}>{children}</ProtectedLayout>;
}
