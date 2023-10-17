import { Button } from '@/components/ui/button';
import { useSandpack } from '@codesandbox/sandpack-react';

export default function RunCodeButton() {
  const { sandpack } = useSandpack();

  return (
    <Button className="rounded-none" onClick={sandpack.runSandpack}>
      Run Code
    </Button>
  );
}
