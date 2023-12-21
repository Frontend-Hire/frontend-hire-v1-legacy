import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';

export default function Prompt() {
  return (
    <div className="flex flex-col overflow-hidden rounded bg-card">
      <div className="bg-primary px-[10px] py-[5px] font-medium">RECRUITER</div>
      <div className="flex gap-[5px] p-[10px]">
        <span className="grow">Hi, am I speaking to username?</span>
        <Button className="bg-white text-black hover:bg-gray-200 active:bg-gray-200">
          <SmartphoneNfcIcon className="mr-2" /> Pardon?
        </Button>
      </div>
    </div>
  );
}
