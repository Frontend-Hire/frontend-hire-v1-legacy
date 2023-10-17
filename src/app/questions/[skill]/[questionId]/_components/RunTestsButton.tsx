import { Button } from '@/components/ui/button';
import { useSandpack } from '@codesandbox/sandpack-react';

export default function RunTestsButton() {
  const { sandpack, dispatch } = useSandpack();

  const handleRunTests = () => {
    if (sandpack.status !== 'running') {
      sandpack.runSandpack();
      return;
    }
    dispatch({ type: 'run-all-tests' });
  };

  return (
    <Button className="rounded-none" onClick={handleRunTests}>
      {sandpack.status !== 'running' ? 'Run Tests' : 'Tests Running'}
    </Button>
  );
}
