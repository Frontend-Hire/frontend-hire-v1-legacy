import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import {
  CodeEditorRef,
  useActiveCode,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { SparklesIcon } from 'lucide-react';
import prettier from 'prettier/standalone';
import { getPrettierOptions } from './getPrettierOptions';

interface Props {
  editorInstance: React.RefObject<CodeEditorRef>;
}

export default function PrettierButton({ editorInstance }: Props) {
  const { code, updateCode } = useActiveCode();
  const {
    sandpack: { activeFile },
  } = useSandpack();

  const prettify = async () => {
    const prettierOptions = getPrettierOptions(activeFile);
    const prettyCode = await prettier.format(code, prettierOptions);

    updateCode(prettyCode);

    if (!editorInstance) return;

    editorInstance.current?.getCodemirror()?.scrollDOM.scrollIntoView();
  };

  return (
    <Tooltip title="Format Code">
      <Button
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
}
