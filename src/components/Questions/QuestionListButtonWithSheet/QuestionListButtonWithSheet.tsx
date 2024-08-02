import QuestionList from '@/components/Questions/QuestionList';
import QuestionsFilter from '@/components/Questions/QuestionsFilter';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Tooltip from '@/components/ui/tooltip';
import { QUESTION_SKILL, QUESTION_TYPE, Question } from '@/types/Question';
import { ListIcon } from 'lucide-react';

type QuestionListButtonWithSheetProps = {
  questions: Question[];
  serverCompletedQuestions: string[];
  skill: QUESTION_SKILL;
  type: QUESTION_TYPE;
};

export default function QuestionListButtonWithSheet({
  questions,
  serverCompletedQuestions,
  skill,
  type,
}: QuestionListButtonWithSheetProps) {
  return (
    <Sheet>
      <Tooltip title="Questions List">
        <SheetTrigger asChild>
          <Button
            className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
            size="icon"
          >
            <ListIcon />
          </Button>
        </SheetTrigger>
      </Tooltip>
      <SheetContent
        side="left"
        className="max-h-screen space-y-4 overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Questions List</SheetTitle>
        </SheetHeader>
        <QuestionsFilter />
        <QuestionList
          questions={questions}
          completedQuestionsServer={serverCompletedQuestions}
          skill={skill}
          type={type}
        />
      </SheetContent>
    </Sheet>
  );
}
