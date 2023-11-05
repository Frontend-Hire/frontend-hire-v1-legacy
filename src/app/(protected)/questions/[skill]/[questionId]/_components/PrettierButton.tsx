import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { useActiveCode } from '@codesandbox/sandpack-react';
import { SparklesIcon } from 'lucide-react';
import prettier from 'prettier/standalone';
import babelParser from 'prettier/plugins/babel';
import esTree from 'prettier/plugins/estree';

export default function PrettierButton() {
  const { code, updateCode } = useActiveCode();

  const prettify = async () => {
    const prettyCode = await prettier.format(code, {
      parser: 'babel',
      plugins: [babelParser, esTree],
    });

    updateCode(prettyCode);
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
