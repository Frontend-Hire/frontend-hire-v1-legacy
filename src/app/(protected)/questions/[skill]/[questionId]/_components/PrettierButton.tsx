import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { SparklesIcon } from 'lucide-react';

export default function PrettierButton() {
  return (
    <Tooltip title="Format Code">
      <Button variant="ghost" size="icon" className="rounded-none">
        <SparklesIcon className="text-white" />
        <VisuallyHidden>Format Code</VisuallyHidden>
      </Button>
    </Tooltip>
  );
}
