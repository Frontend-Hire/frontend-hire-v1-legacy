type InterviewItemProps = {
  title: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function InterviewItem({
  leftIcon,
  title,
  rightIcon,
}: InterviewItemProps) {
  return (
    <div className="flex scale-95 items-center justify-between rounded bg-card p-4 transition-all hover:scale-100 hover:bg-card/80">
      <span className="flex items-center gap-4 md:gap-10">
        {leftIcon}
        <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold">
          {title}
        </h3>
      </span>
      {rightIcon}
    </div>
  );
}
