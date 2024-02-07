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
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-[15px]">
        <Heading variant="h1">{title}</Heading>
        <p className="text-sm text-gray-300">{subTitle}</p>
      </div>
      {icon}
    </div>
  );
}
