import React from 'react';
import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';
import { useSpeechSynthesis } from '../../_context/SpeechSynthesisContext';

type PromptProps = {
  isActive: boolean;
  text: string;
};

export default function Prompt({ isActive, text }: PromptProps) {
  const { speak, cancel, isSpeechAvailable } = useSpeechSynthesis();
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
      speak(text);
    }

    return () => {
      cancel();
    };
  }, [isActive, speak, cancel, text]);

  const onPardon = () => {
    if (isActive) cancel();
    speak(text);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded bg-card">
      <div className="bg-primary px-2 py-[5px] font-medium">RECRUITER</div>
      <div className="flex gap-[5px] p-2">
        <span className="grow">{displayText}</span>
        {isSpeechAvailable && isActive && (
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
