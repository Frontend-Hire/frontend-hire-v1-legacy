import QuestionHeader from '@/components/Questions/QuestionHeader';

type HeaderProps = {
  questionsListButtonWithSheet: React.ReactNode;
};

export default function Header({ questionsListButtonWithSheet }: HeaderProps) {
  return <QuestionHeader rightButtons={questionsListButtonWithSheet} />;
}
