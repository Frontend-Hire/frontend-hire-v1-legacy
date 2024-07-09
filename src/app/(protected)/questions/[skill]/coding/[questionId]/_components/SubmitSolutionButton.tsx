import React from 'react';
import { Button } from '@/components/ui/button';
import SubmissionConfetti from './SubmissionConfetti';
import { useParams } from 'next/navigation';
import { Params } from '../_types';
import Link from 'next/link';

export default function SubmitSolutionButton() {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { skill } = useParams<Params['params']>();

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
        <SubmissionConfetti
          CTA={
            <Button asChild>
              <Link href={`/questions/${skill}/coding`}>
                Practice Another Question
              </Link>
            </Button>
          }
          onClose={() => setShowConfetti(false)}
        />
      )}
    </>
  );
}
