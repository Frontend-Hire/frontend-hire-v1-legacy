import * as React from 'react';
import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';

interface Props {
  isActive: boolean;
}

export default function Prompt({ isActive }: Props) {
  React.useEffect(() => {
    const speak = () => {
      if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance(
          'Hi, am I speaking to username?',
        );
        msg.voice = window.speechSynthesis
          .getVoices()
          .filter((voice) => voice.lang === 'hi-IN')[0];
        window.speechSynthesis.speak(msg);
      } else {
        console.log('Speech synthesis not supported');
      }
    };

    if (isActive) {
      speak();
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isActive]);

  const onPardon = () => {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();

      msg.text = 'Hi, am I speaking to username?';

      msg.voice = window.speechSynthesis
        .getVoices()
        .filter((voice) => voice.lang === 'hi-IN')[0];

      window.speechSynthesis.speak(msg);
    } else {
      console.log('Speech synthesis not supported');
    }
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
