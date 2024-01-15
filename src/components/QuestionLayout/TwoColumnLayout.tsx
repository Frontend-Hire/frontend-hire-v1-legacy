import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import styles from './QuestionLayout.module.css';

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
        <ReflexContainer orientation="horizontal">
          {topRight && <ReflexElement>{topRight}</ReflexElement>}
          {topRight && bottomRight && (
            <ReflexSplitter className={styles.verticalSplitter} />
          )}
          {bottomRight && <ReflexElement>{bottomRight}</ReflexElement>}
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
