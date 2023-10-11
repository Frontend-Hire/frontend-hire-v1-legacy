'use client';

import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';

interface Props {
  children: React.ReactNode;
}

export default function VisuallyHidden({ children }: Props) {
  return <RadixVisuallyHidden.Root>{children}</RadixVisuallyHidden.Root>;
}
