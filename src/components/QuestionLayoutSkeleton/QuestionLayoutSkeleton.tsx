'use client';

import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';

import styles from './QuestionLayout.module.css';
import FakeHeader from './FakeHeader';

export default function QuestionLayoutSkeleton() {
  return (
    <ReflexContainer
      className="rounded-sm border-[10px] border-gray-400"
      orientation="vertical"
    >
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeHeader />
          </ReflexElement>

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeHeader />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
      <ReflexSplitter className={styles.horizontalSplitter} />
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeHeader />
          </ReflexElement>

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300">
            <FakeHeader />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
