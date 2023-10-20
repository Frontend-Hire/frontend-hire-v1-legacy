'use client';

import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';

import styles from './QuestionLayout.module.css';
import FakeTabHeader from './FakeTabHeader';

export default function QuestionLayoutSkeleton() {
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeTabHeader />
          </ReflexElement>

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeTabHeader />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
      <ReflexSplitter className={styles.horizontalSplitter} />
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeTabHeader />
          </ReflexElement>

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeTabHeader />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
