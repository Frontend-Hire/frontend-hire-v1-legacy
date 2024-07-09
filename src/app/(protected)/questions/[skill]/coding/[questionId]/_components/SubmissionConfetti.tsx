import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Confetti from 'react-confetti';
import Link from 'next/link';

type SubmissionConfettiProps = {
  onClose: () => void;
};

export default function SubmissionConfetti({
  onClose,
}: SubmissionConfettiProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <Confetti />
      <DialogContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Great Job!</DialogTitle>
          <DialogDescription>That was good practice!</DialogDescription>
        </DialogHeader>
        <Button asChild>
          <Link prefetch={false} href="/questions">
            Solve More Questions
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
