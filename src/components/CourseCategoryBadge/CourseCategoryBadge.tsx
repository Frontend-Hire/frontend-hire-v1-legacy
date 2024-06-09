import { cn } from '@/lib/utils';
import { Course } from '@/types/Course';
import { cva } from 'class-variance-authority';
import { Badge } from '../ui/badge';

type CourseCategoryProps = {
  category: Course['category'];
};

const categoryVariants = cva('', {
  variants: {
    variant: {
      Svelte:
        'bg-[hsl(15deg,100%,20%)] text-[hsl(15deg,100%,80%)] hover:bg-[hsl(15deg,100%,30%)]',
      React:
        'bg-[hsl(193deg,95%,20%)] text-[hsl(193deg,95%,80%)] hover:bg-[hsl(193deg,95%,30%)]',
      'Next.js':
        'bg-[hsl(0deg,0%,20%)] text-[hsl(0deg,0%,80%)] hover:bg-[hsl(0deg,0%,30%)]',
    },
  },
});

export default function CourseCategoryBadge({ category }: CourseCategoryProps) {
  if (!category) {
    return null;
  }

  return (
    <Badge className={cn(categoryVariants({ variant: category }))}>
      {category}
    </Badge>
  );
}
