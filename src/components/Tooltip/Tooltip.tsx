'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';

interface Props {
  title: string;
  children: React.ReactNode;
  tooltipRootProps?: RadixTooltip.TooltipProps;
  showArrow?: boolean;
}

export default function Tooltip({
  children,
  title,
  tooltipRootProps,
  showArrow = true,
}: Props) {
  return (
    <RadixTooltip.Provider delayDuration={500}>
      <RadixTooltip.Root {...tooltipRootProps}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="rounded-sm bg-gray-800 p-0.5 text-sm text-white"
            sideOffset={5}
          >
            {title}
            {showArrow && <RadixTooltip.Arrow className="fill-gray-800" />}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
