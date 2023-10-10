import { cva } from 'cva';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const p = cva('leading-7');

export default function Text({ children, className }: Props) {
  return <p className={p({ className })}>{children}</p>;
}
