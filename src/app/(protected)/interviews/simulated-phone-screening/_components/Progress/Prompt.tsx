import * as React from 'react';
import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';
import { useSpeechSynthesis } from '../../_context/SpeechSynthesisContext';

interface Props {
  isActive: boolean;
}

export default function Prompt({ isActive }: Props) {
  const { speak, cancel } = useSpeechSynthesis();

  React.useEffect(() => {
    if (isActive) {
      speak('Hi, am I speaking to username?');
    }

    return () => {
      cancel();
    };
  }, [isActive, speak, cancel]);

  const onPardon = () => {
    speak('Hi, am I speaking to username?');
  };

  return (
    <div className="flex flex-col overflow-hidden rounded bg-card">
      <div className="bg-primary px-[10px] py-[5px] font-medium">RECRUITER</div>
      <div className="flex gap-[5px] p-[10px]">
        <span className="grow">Hi, am I speaking to username?</span>
        {isActive && (
          <Button
            onClick={onPardon}
            className="bg-white text-black hover:bg-gray-200 active:bg-gray-200"
          >
            <SmartphoneNfcIcon className="mr-2" /> Pardon?
          </Button>
        )}
      </div>
    </div>
  );
}
