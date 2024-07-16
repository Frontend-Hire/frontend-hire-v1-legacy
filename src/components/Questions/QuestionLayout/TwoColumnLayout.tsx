import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import { cn } from '@/lib/utils';
import { useQuestionLayout } from './QuestionLayoutProvider';

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
      <ResizablePanel minSize={10}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>{topLeft}</ResizablePanel>
          {topLeft && bottomLeft && (
            <ResizableHandle
              withHandle
              className="w-2 rounded-none border-none bg-neutral-800 hover:bg-neutral-600"
            />
          )}
          {bottomLeft && (
            <ResizablePanel minSize={10}>{bottomLeft}</ResizablePanel>
          )}
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="hidden w-2 rounded-none border-none bg-neutral-800 hover:bg-neutral-600 xs:flex"
      />
      <ResizablePanel minSize={20} className="hidden xs:block">
        <ResizablePanelGroup direction={orientation}>
          <ResizablePanel minSize={20}>{topRight}</ResizablePanel>
          {topRight && bottomRight && (
            <ResizableHandle
              withHandle
              className={cn(
                'rounded-none border-none bg-neutral-800 hover:bg-neutral-600',
                orientation === 'vertical' ? '!h-2' : '!w-2',
              )}
            />
          )}
          {bottomRight && (
            <ResizablePanel minSize={20}>{bottomRight}</ResizablePanel>
          )}
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
