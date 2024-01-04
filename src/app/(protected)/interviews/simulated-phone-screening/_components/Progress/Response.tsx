import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';
import useSpeechRecognition from '../../_hooks/useSpeechRecognition';

type ResponseProps = {
  isActive: boolean;
  onCompletion: () => void;
  isFinal?: boolean;
};

export default function Response({
  isActive,
  onCompletion,
  isFinal,
}: ResponseProps) {
  const {
    startRecognition,
    stopRecognition,
    retryRecognition,
    isRecording,
    attemptMade,
    finalTranscript,
    interimTranscript,
    error,
  } = useSpeechRecognition(isActive);

  return (
    <>
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
                  {attemptMade ? 'Speak More' : 'Start'}
                </Button>
              )}
            </>
          )}
          {isActive && attemptMade && !isRecording && (
            <Button
              onClick={retryRecognition}
              className="bg-white text-black hover:bg-gray-200 active:bg-gray-200"
            >
              <RotateCwIcon className="mr-2" /> Retry
            </Button>
          )}
        </div>
        {error && <div className="text-destructive">{error}</div>}
      </div>
      {!isFinal && isActive && !isRecording && attemptMade && (
        <Button onClick={onCompletion}>Continue</Button>
      )}
    </>
  );
}
