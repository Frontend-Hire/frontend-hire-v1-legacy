interface Props {
  children: React.ReactNode;
}

export default function VisuallyHidden({ children }: Props) {
  return <span className="sr-only">{children}</span>;
}
