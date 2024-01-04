import * as React from 'react';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import {
  CodeEditorRef,
  useActiveCode,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { SparklesIcon } from 'lucide-react';
import { formatCodeWithPrettier } from './utils';

type PrettierButtonProps = {
  editorInstance: React.RefObject<CodeEditorRef>;
};

const PrettierButton = React.forwardRef<HTMLButtonElement, PrettierButtonProps>(
  ({ editorInstance }, ref) => {
    const { code, updateCode, readOnly } = useActiveCode();
    const {
      sandpack: { activeFile },
    } = useSandpack();

    const prettify = async () => {
      try {
        if (readOnly) return;

        const prettyCode = await formatCodeWithPrettier(code, activeFile);
        updateCode(prettyCode);

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
          onClick={prettify}
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
