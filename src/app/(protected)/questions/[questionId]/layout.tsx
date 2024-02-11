import ProtectedLayout from '@/components/ProtectedLayout';

export default function QuestionLayout({ children }: React.PropsWithChildren) {
  return <ProtectedLayout showHeader={false}>{children}</ProtectedLayout>;
}
