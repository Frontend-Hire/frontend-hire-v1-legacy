interface Props {
  children: React.ReactNode;
}

export default function SpecialText({ children }: Props) {
  return <span className="font-bold text-primary">{children}</span>;
}
