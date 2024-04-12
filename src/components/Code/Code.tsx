import { cn } from '@/lib/utils';

export default function Code({
  children,
  className,
  ...props
}: React.ComponentProps<'code'>) {
  const hasLineNumbers = 'data-line-numbers' in props;

  return (
    <code
      className={cn(
        'p-3 text-sm',
        hasLineNumbers && '[counter-reset:line]',
        className,
      )}
      dir="ltr"
      {...props}
    >
      {children}
    </code>
  );
}
