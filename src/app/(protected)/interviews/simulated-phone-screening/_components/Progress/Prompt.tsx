import { Button } from '@/components/ui/button';
import { SmartphoneNfcIcon } from 'lucide-react';

export default function Prompt() {
  const onPardon = () => {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();

      msg.text = 'Hi, am I speaking to username?';

      console.log(window.speechSynthesis.getVoices());

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
        <Button
          onClick={onPardon}
          className="bg-white text-black hover:bg-gray-200 active:bg-gray-200"
        >
          <SmartphoneNfcIcon className="mr-2" /> Pardon?
        </Button>
      </div>
    </div>
  );
}
