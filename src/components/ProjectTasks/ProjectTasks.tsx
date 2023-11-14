'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';

interface ProjectTasksProps {
  children: React.ReactNode;
}

export function ProjectTasks({ children }: ProjectTasksProps) {
  return (
    <Accordion className="my-2 prose-h3:m-0" type="single" collapsible>
      {children}
    </Accordion>
  );
}

interface ProjectTaskItemProps {
  id: number;
  taskName: string;
  children: React.ReactNode;
}

export function ProjectTaskItem({
  id,
  taskName,
  children,
}: ProjectTaskItemProps) {
  return (
    <AccordionItem value={taskName}>
      <AccordionTrigger className="h-[40px] bg-foreground px-4 py-2 text-white">
        {taskName}
      </AccordionTrigger>
      <AccordionContent className="prose prose-invert flex max-w-none flex-col rounded-b bg-accent-foreground px-4 py-2 text-white prose-a:text-red-500 prose-a:no-underline prose-a:after:content-['_↗'] prose-strong:text-red-500 prose-code:bg-red-800 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-['']">
        {children}
        <Button
          className="not-prose self-end bg-blue-500 text-white"
          size="sm"
          variant="secondary"
        >
          Mark as Complete
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
