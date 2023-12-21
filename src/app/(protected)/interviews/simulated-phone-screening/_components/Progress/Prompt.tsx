import * as React from 'react';
import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';
import { useSpeechSynthesis } from '../../_context/SpeechSynthesisContext';

interface Props {
  isActive: boolean;
  text?: string;
}

export default function Prompt({
  isActive,
  text = 'Hi, am I speaking to username?',
}: Props) {
  const { speak, cancel } = useSpeechSynthesis();
  const [displayText, setDisplayText] = React.useState('');
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = 50;
    const timer = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [text, charIndex]);

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
        <span className="grow">{displayText}</span>
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
