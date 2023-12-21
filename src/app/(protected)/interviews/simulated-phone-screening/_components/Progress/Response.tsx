import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';

export default function Response() {
  return (
    <div className="flex flex-col overflow-hidden rounded bg-card">
      <div className="bg-secondary px-[10px] py-[5px] font-medium">YOU</div>
      <div className="flex gap-[5px] p-[10px]">
        <span className="grow">Yes, this is username!</span>
        <Button className="bg-white text-black hover:bg-gray-200 active:bg-gray-200">
          <RotateCwIcon className="mr-2" /> Retry
        </Button>
      </div>
    </div>
  );
}
