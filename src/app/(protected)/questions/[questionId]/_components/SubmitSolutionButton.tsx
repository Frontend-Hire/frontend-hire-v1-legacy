import React from 'react';
import { Button } from '@/components/ui/button';
import SubmissionConfetti from './SubmissionConfetti';

export default function SubmitSolutionButton() {
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleSubmit = async () => {
    setShowConfetti(true);
  };

  return (
    <>
      <Button
        className="rounded-t-none bg-green-600 hover:bg-green-700"
        onClick={handleSubmit}
      >
        Mark as Solved
      </Button>
      {showConfetti && (
        <SubmissionConfetti onClose={() => setShowConfetti(false)} />
      )}
    </>
  );
}
