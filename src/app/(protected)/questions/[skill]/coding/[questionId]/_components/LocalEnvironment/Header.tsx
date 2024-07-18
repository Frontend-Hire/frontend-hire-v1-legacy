import QuestionHeader from '@/components/Questions/QuestionHeader';
import MarkSolvedButton from './MarkSolvedButton';

type HeaderProps = {
  questionsListButtonWithSheet: React.ReactNode;
};

export default function Header({ questionsListButtonWithSheet }: HeaderProps) {
  return (
    <QuestionHeader
      leftButtons={questionsListButtonWithSheet}
      rightButtons={<MarkSolvedButton />}
    />
  );
}
