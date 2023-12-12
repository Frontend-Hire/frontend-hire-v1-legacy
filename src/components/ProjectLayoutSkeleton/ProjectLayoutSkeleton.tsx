'use client';

import { ReflexContainer, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';

import FakeTabHeader from './FakeTabHeader';

export default function ProjectLayoutSkeleton() {
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement className="animate-pulse bg-[#151515]">
        <FakeTabHeader />
      </ReflexElement>
    </ReflexContainer>
  );
}
