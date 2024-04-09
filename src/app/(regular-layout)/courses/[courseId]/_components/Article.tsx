import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function (props) {
  return (
    <div className="items-left flex flex-col gap-y-4">
      <article class="prose prose-sm prose-invert lg:prose-base">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        {Array(2)
          .fill('')
          .map((_, index) => (
            <>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </>
          ))}
      </article>
      <Pagination />
    </div>
  );
}

function Pagination() {
  return (
    <div className="my-16 w-full space-y-4">
      <p className="w-full text-right text-xs">
        Last updated on February 26, 2024
      </p>
      <hr className="text-ring" />
      <div className="flex items-center justify-between">
        <Button variant="primary" className="flex items-center gap-x-2">
          <ChevronLeft className="size-4" /> Prev
        </Button>
        <Button variant="primary" className="flex items-center gap-x-2">
          Next <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
