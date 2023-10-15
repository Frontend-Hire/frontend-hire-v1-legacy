interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return <div>{children}</div>;
}
