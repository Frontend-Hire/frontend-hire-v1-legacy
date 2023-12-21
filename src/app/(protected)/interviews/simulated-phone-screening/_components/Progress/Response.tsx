import * as React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';

interface Props {
  isActive: boolean;
}

export default function Response({ isActive }: Props) {
  const [recognition, setRecognition] =
    React.useState<SpeechRecognition | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [finalTranscript, setFinalTranscript] = React.useState('');
  const [interimTranscript, setInterimTranscript] = React.useState('');
  const [error, setError] = React.useState('');
  const [attemptMade, setAttemptMade] = React.useState(false);

  React.useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('webkitSpeechRecognition is not supported');
      return;
    }

    if (!isActive) {
      return;
    }

    const speechRecognition = new window.webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      let newFinalTranscript = '';
      let newInterimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          newFinalTranscript += event.results[i][0].transcript;
        } else {
          newInterimTranscript += event.results[i][0].transcript;
        }
      }

      setFinalTranscript((prev) => prev + newFinalTranscript);
      setInterimTranscript(newInterimTranscript);
    };

    speechRecognition.onerror = () => {
      setError('Oops, something went wrong!');
    };

    speechRecognition.onend = () => {
      setIsRecording(false);
    };

    setRecognition(speechRecognition);

    return () => {
      if (speechRecognition) {
        speechRecognition.stop();
        setIsRecording(false);
      }
    };
  }, [isActive]);

  const startRecognition = () => {
    if (recognition) {
      setIsRecording(true);
      setAttemptMade(true);
      recognition.start();
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  const retryRecognition = () => {
    setFinalTranscript('');
    setInterimTranscript('');
    startRecognition();
  };

  return (
    <div className="flex flex-col overflow-hidden rounded bg-card">
      <div className="bg-secondary px-[10px] py-[5px] font-medium">YOU</div>
      <div className="flex gap-[5px] p-[10px]">
        <span className="grow">
          {finalTranscript}
          <span className="text-blue-500">{interimTranscript}</span>
        </span>
        {isActive && (
          <>
            {isRecording ? (
              <Button
                onClick={stopRecognition}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Stop
              </Button>
            ) : (
              <Button
                onClick={startRecognition}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Start
              </Button>
            )}
          </>
        )}
        {isActive && !isRecording && attemptMade && (
          <Button
            onClick={retryRecognition}
            className="bg-white text-black hover:bg-gray-200 active:bg-gray-200"
          >
            <RotateCwIcon className="mr-2" /> Retry
          </Button>
        )}
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
