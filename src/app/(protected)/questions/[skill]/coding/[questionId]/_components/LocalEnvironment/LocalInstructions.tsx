'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

export default function LocalInstructions() {
  const [showLocalInstructions, setShowLocalInstructions] =
    React.useState<boolean>(
      JSON.parse(localStorage.getItem('showLocalInstructions') || 'true'),
    );

  const handleToggle = () => {
    setShowLocalInstructions((currentValue) => {
      localStorage.setItem(
        'showLocalInstructions',
        JSON.stringify(!currentValue),
      );
      return !currentValue;
    });
  };

  if (!showLocalInstructions) {
    return null;
  }

  return (
    <div className="space-y-2 rounded bg-card p-4 text-card-foreground">
      <p>
        This question can only be solved in your local environment. We want to
        give you the best learning experience possible which unfortunately is
        not possible in the browser.
      </p>
      <Button size="sm" onClick={handleToggle}>
        Hide Instructions
      </Button>
    </div>
  );
}
