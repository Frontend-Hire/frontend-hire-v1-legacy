import { Button } from '@/components/ui/button';
import { useSandpack } from '@codesandbox/sandpack-react';

export default function RunCodeButton() {
  const { sandpack } = useSandpack();

  const handleRunCode = () => {
    if (sandpack.status == 'running') return;

    sandpack.runSandpack();
  };

  return (
    <Button className="rounded-none" onClick={handleRunCode}>
      {sandpack.status !== 'running' ? 'Run Code' : 'Code Running'}
    </Button>
  );
}
