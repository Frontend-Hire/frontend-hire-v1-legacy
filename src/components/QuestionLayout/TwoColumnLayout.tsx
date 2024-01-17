import React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import styles from './QuestionLayout.module.css';
import { useQuestionLayout } from '@/app/(protected)/questions/[questionId]/_context/QuestionLayoutProvider';

type TwoColumnLayoutProps = {
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
};

export default function TwoColumnLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: TwoColumnLayoutProps) {
  const { layout } = useQuestionLayout();

  const orientation = React.useMemo(() => {
    if (layout === 'col-3') return 'vertical';
    return 'horizontal';
  }, [layout]);

  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          {topLeft && <ReflexElement>{topLeft}</ReflexElement>}
          {topLeft && bottomLeft && (
            <ReflexSplitter className={styles.verticalSplitter} />
          )}
          {bottomLeft && <ReflexElement>{bottomLeft}</ReflexElement>}
        </ReflexContainer>
      </ReflexElement>
      <ReflexSplitter className={styles.horizontalSplitter} />
      <ReflexElement>
        <ReflexContainer orientation={orientation}>
          {topRight && <ReflexElement>{topRight}</ReflexElement>}
          {topRight &&
            bottomRight &&
            (orientation === 'horizontal' ? (
              <ReflexSplitter className={styles.verticalSplitter} />
            ) : (
              <ReflexSplitter className={styles.horizontalSplitter} />
            ))}
          {bottomRight && <ReflexElement>{bottomRight}</ReflexElement>}
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
