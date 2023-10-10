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
      muted: 'text-gray-800 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function Text({ children, className }: Props) {
  return <p className={p({ className })}>{children}</p>;
}
