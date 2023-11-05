import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Confetti from 'react-confetti';

interface Props {
  onClose: () => void;
}

export default function SubmissionConfetti({ onClose }: Props) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <Confetti />
      <DialogContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Great Job!</DialogTitle>
          <DialogDescription>That was good practice!</DialogDescription>
        </DialogHeader>
        <Button>Solve More Questions</Button>
      </DialogContent>
    </Dialog>
  );
}
