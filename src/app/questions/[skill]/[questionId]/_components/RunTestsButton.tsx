import { Button } from '@/components/ui/button';
import { useSandpack } from '@codesandbox/sandpack-react';

export default function RunTestsButton() {
  const { sandpack, dispatch } = useSandpack();

  return (
    <Button
      className="rounded-none"
      onClick={() => {
        if (sandpack.status !== 'running') {
          sandpack.runSandpack();
          return;
        }
        dispatch({ type: 'run-all-tests' });
      }}
    >
      Run Tests
    </Button>
  );
}
