import LayoutItem from './LayoutItem';

interface Props {
  topLeft: React.ReactNode;
  topRight: React.ReactNode;
  bottomLeft: React.ReactNode;
  bottomRight: React.ReactNode;
}

export default function Layout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: Props) {
  return (
    <div className="grid h-full border-collapse grid-cols-2">
      <LayoutItem>{topLeft}</LayoutItem>
      <LayoutItem>{topRight}</LayoutItem>
      <LayoutItem>{bottomLeft}</LayoutItem>
      <LayoutItem>{bottomRight}</LayoutItem>
    </div>
  );
}
