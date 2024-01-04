import { cva } from 'cva';

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const heading = cva('scroll-m-20', {
  variants: {
    variant: {
      h1: 'text-4xl font-black leading-[100%] tracking-tight',
      h2: 'text-3xl font-semibold transition-colors first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
    },
  },
});

export default function Heading({
  variant,
  className,
  children,
}: React.PropsWithChildren<HeadingProps>) {
  const Component = variant;

  return (
    <Component className={heading({ variant, className })}>
      {children}
    </Component>
  );
}
