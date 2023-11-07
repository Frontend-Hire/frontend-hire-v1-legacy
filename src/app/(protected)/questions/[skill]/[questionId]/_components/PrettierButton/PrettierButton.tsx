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

interface Props {
  editorInstance: React.RefObject<CodeEditorRef>;
}

const PrettierButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ editorInstance }, ref) => {
    const { code, updateCode, readOnly } = useActiveCode();
    const {
      sandpack: { activeFile, visibleFiles, files },
    } = useSandpack();

    const prettify = async () => {
      if (readOnly) return;

      const prettyCode = await formatCodeWithPrettier(code, activeFile);
      updateCode(prettyCode);

      if (!editorInstance) return;
      editorInstance.current?.getCodemirror()?.scrollDOM.scrollIntoView();
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
