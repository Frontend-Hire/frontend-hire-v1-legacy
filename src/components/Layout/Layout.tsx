'use client';

import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';

// import styles from './Layout.module.css';

interface Props {
  topLeft: React.ReactNode;
  topRight: React.ReactNode;
  bottomLeft: React.ReactNode;
  bottomRight: React.ReactNode;
}

export default function Layout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: Props) {
  return (
    <ReflexContainer
      className="rounded-sm border-[10px] border-gray-400"
      orientation="vertical"
    >
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement>{topLeft}</ReflexElement>
          <ReflexSplitter />
          <ReflexElement>{bottomLeft}</ReflexElement>
        </ReflexContainer>
      </ReflexElement>
      <ReflexSplitter />
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement>{topRight}</ReflexElement>
          <ReflexSplitter />
          <ReflexElement>{bottomRight}</ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
