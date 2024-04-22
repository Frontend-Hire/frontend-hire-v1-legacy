import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import { useQuestionLayout } from '@/app/(protected)/questions/[questionId]/_context/QuestionLayoutProvider';
import { cn } from '@/lib/utils';

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
    if (layout === 'col-3') return 'horizontal';
    return 'vertical';
  }, [layout]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>{topLeft}</ResizablePanel>
          {topLeft && bottomLeft && (
            <ResizableHandle
              withHandle
              className="w-2 rounded-none border-none bg-neutral-800 hover:bg-neutral-600"
            />
          )}
          {bottomLeft && <ResizablePanel>{bottomLeft}</ResizablePanel>}
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="w-2 rounded-none border-none bg-neutral-800 hover:bg-neutral-600"
      />
      <ResizablePanel>
        <ResizablePanelGroup direction={orientation}>
          <ResizablePanel>{topRight}</ResizablePanel>
          {topRight && bottomRight && (
            <ResizableHandle
              withHandle
              className={cn(
                'rounded-none border-none bg-neutral-800 hover:bg-neutral-600',
                orientation === 'vertical' ? '!h-2' : '!w-2',
              )}
            />
          )}
          {bottomRight && <ResizablePanel>{bottomRight}</ResizablePanel>}
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
