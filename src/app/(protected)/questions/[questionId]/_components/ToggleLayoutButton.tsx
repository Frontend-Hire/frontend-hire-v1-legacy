import { Button } from '@/components/ui/button';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { PanelsLeftBottomIcon, Columns3Icon } from 'lucide-react';
import Tooltip from '@/components/ui/tooltip';
import { QuestionLayout } from '@/types/Question';
import { useQuestionLayout } from '../_context/QuestionLayoutProvider';

const LayoutIcons: { [key in QuestionLayout]: React.ReactNode } = {
  'col-3': <Columns3Icon />,
  'col-2': <PanelsLeftBottomIcon />,
};

export default function ToggleLayoutButton() {
  const { layout, toggleLayout } = useQuestionLayout();

  return (
    <Tooltip title="Toggle Layout">
      <Button
        size="icon"
        className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
        onClick={toggleLayout}
      >
        {LayoutIcons[layout]}
        <VisuallyHidden>Toggle Layout</VisuallyHidden>
      </Button>
    </Tooltip>
  );
}
