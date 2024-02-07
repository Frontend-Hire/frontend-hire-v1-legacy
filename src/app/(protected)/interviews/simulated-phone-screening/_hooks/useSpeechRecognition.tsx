import React from 'react';

export default function useSpeechRecognition(isActive: boolean) {
  const [recognition, setRecognition] =
    React.useState<SpeechRecognition | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [attemptMade, setAttemptMade] = React.useState(false);
  const [finalTranscript, setFinalTranscript] = React.useState('');
  const [interimTranscript, setInterimTranscript] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('webkitSpeechRecognition is not supported');
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
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isActive && recognition && isRecording) {
      recognition.stop();
      setIsRecording(false);
    }
  }, [isActive, recognition, isRecording]);

  const startRecognition = () => {
    if (recognition) {
      setIsRecording(true);
      setAttemptMade(true);
      recognition.start();
      setError('');
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
    setError('');
  };

  return {
    startRecognition,
    stopRecognition,
    retryRecognition,
    isRecording,
    attemptMade,
    finalTranscript,
    interimTranscript,
    error,
  };
}
