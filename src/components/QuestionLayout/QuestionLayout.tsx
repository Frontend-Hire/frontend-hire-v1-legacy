'use client';

import * as React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';

import styles from './QuestionLayout.module.css';
import { Tabs } from '../ui/tabs';
import QuestionMobileLayout from './QuestionMobileLayout';

interface Props {
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
}

export default function QuestionLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: Props) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 400);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-0 flex-grow">
      {isMobile ? (
        <QuestionMobileLayout
          tabs={[topLeft, bottomLeft, topRight, bottomRight]}
        />
      ) : (
        <ReflexContainer orientation="vertical">
          <ReflexElement>
            <ReflexContainer orientation="horizontal">
              {topLeft && <ReflexElement>{topLeft.content}</ReflexElement>}
              {topLeft && bottomLeft && (
                <ReflexSplitter className={styles.verticalSplitter} />
              )}
              {bottomLeft && (
                <ReflexElement>{bottomLeft.content}</ReflexElement>
              )}
            </ReflexContainer>
          </ReflexElement>
          <ReflexSplitter className={styles.horizontalSplitter} />
          <ReflexElement>
            <ReflexContainer orientation="horizontal">
              {topRight && <ReflexElement>{topRight.content}</ReflexElement>}
              {topRight && bottomRight && (
                <ReflexSplitter className={styles.verticalSplitter} />
              )}
              {bottomRight && (
                <ReflexElement>{bottomRight.content}</ReflexElement>
              )}
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      )}
    </div>
  );
}
