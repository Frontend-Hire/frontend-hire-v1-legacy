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
  CTA?: React.ReactNode;
};

export default function SubmissionConfetti({
  onClose,
  CTA = (
    <Button asChild>
      <Link prefetch={false} href="/">
        Back To Home
      </Link>
    </Button>
  ),
}: SubmissionConfettiProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <Confetti />
      <DialogContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Great Job!</DialogTitle>
          <DialogDescription>That was good practice!</DialogDescription>
        </DialogHeader>
        {CTA}
      </DialogContent>
    </Dialog>
  );
}
