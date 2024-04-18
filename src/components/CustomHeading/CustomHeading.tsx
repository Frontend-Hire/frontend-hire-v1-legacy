import Heading from '../Heading';

type CustomHeadingProps = {
  title: string;
  subTitle: string;
  icon?: React.ReactNode;
};

export default function CustomHeading({
  title,
  subTitle,
  icon,
}: CustomHeadingProps) {
  return (
    <div className="not-prose flex justify-between">
      <div className="flex flex-col gap-4">
        <Heading variant="h1">{title}</Heading>
        <p className="text-sm text-gray-300">{subTitle}</p>
      </div>
      {icon && <div className="shrink-0">{icon}</div>}
    </div>
  );
}
