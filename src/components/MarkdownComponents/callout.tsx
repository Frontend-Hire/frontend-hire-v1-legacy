import { LucideInfo } from 'lucide-react';

import { cn } from '@/lib/utils';

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <LucideInfo className="mt-1" />,
  warning: '⚠️',
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
  default: cn('border-orange-400/30 bg-orange-400/20 text-orange-300'),
  error: cn('border-red-200/30 bg-red-900/30 text-red-200'),
  info: cn('border-blue-200/30 bg-blue-900/30 text-blue-200'),
  warning: cn('border-yellow-200/30 bg-yellow-700/30 text-yellow-200'),
};

type CalloutProps = {
  type?: CalloutType;
  emoji?: string | React.ReactNode;
};

export default function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type],
}: React.PropsWithChildren<CalloutProps>) {
  return (
    <div
      className={cn(
        'mt-6 flex overflow-x-auto rounded-lg border py-2 pr-4 ',
        'contrast-more:border-current',
        classes[type],
      )}
    >
      <div
        className="select-none pl-3 pr-2 text-xl"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-7">{children}</div>
    </div>
  );
}
