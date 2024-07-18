import SubmitSolutionButton from './SubmitSolutionButton';
import ToggleLayoutButton from './ToggleLayoutButton';
import QuestionHeader from '@/components/Questions/QuestionHeader';

type HeaderProps = {
  questionsListButtonWithSheet: React.ReactNode;
};

export default function Header({ questionsListButtonWithSheet }: HeaderProps) {
  return (
    <QuestionHeader
      leftButtons={<>{questionsListButtonWithSheet}</>}
      rightButtons={
        <>
          <ToggleLayoutButton />
          <SubmitSolutionButton />
        </>
      }
    />
  );
}
