'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectTasksProvider, { useProjectTasks } from './ProjectTasksContext';

interface ProjectTasksProps {
  children: React.ReactNode;
}

export function ProjectTasks({ children }: ProjectTasksProps) {
  return (
    <ProjectTasksProvider>
      <Accordion
        className="my-2 flex flex-col gap-4 prose-h3:m-0"
        type="single"
        collapsible
      >
        {children}
      </Accordion>
    </ProjectTasksProvider>
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
  const { markTaskAsComplete, markTaskAsIncomplete, completedTasks } =
    useProjectTasks();

  const isCompleted = completedTasks.includes(id);

  return (
    <AccordionItem
      className="overflow-hidden rounded border-b-0 shadow"
      value={taskName}
    >
      <AccordionTrigger className="h-[40px] bg-card px-4 py-2 text-white">
        <span className="flex items-center gap-4">
          {isCompleted ? <CheckCircleIcon /> : <CircleIcon />}
          {taskName}
        </span>
      </AccordionTrigger>
      <AccordionContent className="prose prose-invert flex max-w-none flex-col rounded-b bg-card px-4 py-2 prose-p:m-0 prose-a:text-red-500 prose-a:no-underline prose-a:after:content-['_↗'] prose-strong:text-red-500 prose-code:bg-red-800 prose-code:p-0.5 prose-code:before:content-[''] prose-code:after:content-[''] prose-ul:m-0">
        {children}
        {isCompleted ? (
          <Button
            className="not-prose self-end bg-orange-500 hover:bg-orange-600"
            size="sm"
            onClick={() => markTaskAsIncomplete(id)}
          >
            Mark as Incomplete
          </Button>
        ) : (
          <Button
            className="not-prose self-end bg-blue-500 text-white hover:bg-blue-600"
            size="sm"
            onClick={() => markTaskAsComplete(id)}
          >
            Mark as Complete
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
