import { cn } from '@/lib/utils';

type QuestionTypeCardProps = {
  title: string;
  className?: string;
};

export default function QuestionTypeCard({
  title,
  className,
}: QuestionTypeCardProps) {
  return (
    <div
      className={cn(
        'flex min-h-40 scale-95 flex-col items-center justify-center rounded bg-card p-5 text-center text-2xl font-bold transition-all hover:scale-100',
        className,
      )}
    >
      {title}
    </div>
  );
}
