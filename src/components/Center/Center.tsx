interface Props {
  children: React.ReactNode;
}

export default function Center({ children }: Props) {
  return <span className='flex items-center justify-center'>{children}</span>;
}
