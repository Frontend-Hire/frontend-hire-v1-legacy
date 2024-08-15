import React from 'react';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { CodeEditorRef } from '@codesandbox/sandpack-react';
import { SparklesIcon } from 'lucide-react';
import usePrettier from '@/hooks/usePrettier';

type PrettierButtonProps = {
  editorInstance: React.RefObject<CodeEditorRef>;
};

const PrettierButton = React.forwardRef<HTMLButtonElement, PrettierButtonProps>(
  ({ editorInstance }, ref) => {
    const { prettify, readOnly } = usePrettier();

    const onPretty = async () => {
      try {
        await prettify();

        if (!editorInstance) return;
        editorInstance.current?.getCodemirror()?.scrollDOM.scrollIntoView();
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <Tooltip title="Format Code">
        <Button
          ref={ref}
          disabled={readOnly}
          onClick={onPretty}
          variant="ghost"
          size="icon"
          className="rounded-none"
        >
          <SparklesIcon className="text-white" />
          <VisuallyHidden>Format Code</VisuallyHidden>
        </Button>
      </Tooltip>
    );
  },
);

PrettierButton.displayName = 'PrettierButton';

export default PrettierButton;
