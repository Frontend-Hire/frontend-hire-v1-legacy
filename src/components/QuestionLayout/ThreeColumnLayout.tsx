import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import styles from './QuestionLayout.module.css';

type ThreeColumnLayoutProps = {
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
};

export default function ThreeColumnLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: ThreeColumnLayoutProps) {
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

      {topRight && <ReflexElement>{topRight}</ReflexElement>}

      <ReflexSplitter className={styles.horizontalSplitter} />

      {bottomRight && <ReflexElement>{bottomRight}</ReflexElement>}
    </ReflexContainer>
  );
}
