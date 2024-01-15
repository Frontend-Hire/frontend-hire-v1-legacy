'use client';

import React from 'react';
import QuestionMobileLayout from './QuestionMobileLayout';
import { useQuestionLayout } from '@/app/(protected)/questions/[questionId]/_context/QuestionLayoutProvider';
import ThreeColumnLayout from './ThreeColumnLayout';
import TwoColumnLayout from './TwoColumnLayout';

type QuestionLayoutProps = {
  topLeft?: {
    label: string;
    content: React.ReactNode;
  };
  topRight?: {
    label: string;
    content: React.ReactNode;
  };
  bottomLeft?: {
    label: string;
    content: React.ReactNode;
  };
  bottomRight?: {
    label: string;
    content: React.ReactNode;
  };
};

export default function QuestionLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: QuestionLayoutProps) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 450);
  const { layout } = useQuestionLayout();

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MemoTopLeft = React.useCallback(() => topLeft, [topLeft]);
  const MemoTopRight = React.useCallback(() => topRight, [topRight]);
  const MemoBottomLeft = React.useCallback(() => bottomLeft, [bottomLeft]);
  const MemoBottomRight = React.useCallback(() => bottomRight, [bottomRight]);

  if (isMobile) {
    return (
      <div className="h-0 flex-grow">
        <QuestionMobileLayout
          tabs={[
            MemoTopLeft(),
            MemoBottomLeft(),
            MemoTopRight(),
            MemoBottomRight(),
          ]}
        />
      </div>
    );
  }

  return (
    <div className="h-0 flex-grow">
      {layout === 'col-3' ? (
        <ThreeColumnLayout
          topLeft={MemoTopLeft()?.content}
          topRight={MemoTopRight()?.content}
          bottomLeft={MemoBottomLeft()?.content}
          bottomRight={MemoBottomRight()?.content}
        />
      ) : (
        <TwoColumnLayout
          topLeft={MemoTopLeft()?.content}
          topRight={MemoTopRight()?.content}
          bottomLeft={MemoBottomLeft()?.content}
          bottomRight={MemoBottomRight()?.content}
        />
      )}
    </div>
  );
}
