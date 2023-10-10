import { cva } from 'cva';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
}

const heading = cva('scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'border-b pb-2 text-3xl font-semibold transition-colors first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
    },
  },
});

export default function Heading({ variant, className, children }: Props) {
  const Component = variant;

  return (
    <Component className={heading({ variant, className })}>
      {children}
    </Component>
  );
}
