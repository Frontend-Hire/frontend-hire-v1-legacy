import { cva } from 'cva';

interface Props {
  children: React.ReactNode;
  variant?: 'muted';
  className?: string;
}

const p = cva('', {
  variants: {
    variant: {
      default: '',
      muted: 'text-gray-600 text-sm leading-tight',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function Text({ children, variant, className }: Props) {
  return <p className={p({ variant, className })}>{children}</p>;
}
