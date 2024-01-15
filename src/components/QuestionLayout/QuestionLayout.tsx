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

  if (isMobile) {
    return (
      <div className="h-0 flex-grow">
        <QuestionMobileLayout
          tabs={[topLeft, bottomLeft, topRight, bottomRight]}
        />
      </div>
    );
  }

  return (
    <div className="h-0 flex-grow">
      {layout === 'col-3' ? (
        <ThreeColumnLayout
          topLeft={topLeft?.content}
          topRight={topRight?.content}
          bottomLeft={bottomLeft?.content}
          bottomRight={bottomRight?.content}
        />
      ) : (
        <TwoColumnLayout
          topLeft={topLeft?.content}
          topRight={topRight?.content}
          bottomLeft={bottomLeft?.content}
          bottomRight={bottomRight?.content}
        />
      )}
    </div>
  );
}
