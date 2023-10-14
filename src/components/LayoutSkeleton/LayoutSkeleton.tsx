'use client';

import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';

import styles from './Layout.module.css';

export default function LayoutSkeleton() {
  return (
    <ReflexContainer
      className="rounded-sm border-[10px] border-gray-400"
      orientation="vertical"
    >
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300" />

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300" />
        </ReflexContainer>
      </ReflexElement>
      <ReflexSplitter className={styles.horizontalSplitter} />
      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement className="animate-pulse bg-zinc-300" />

          <ReflexSplitter className={styles.verticalSplitter} />

          <ReflexElement className="animate-pulse bg-zinc-300" />
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}
