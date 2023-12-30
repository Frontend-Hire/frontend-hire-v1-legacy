'use client';

import * as React from 'react';
import { useSettings } from './SettingsContext';

interface SpeechSynthesisContextType {
  speak: (text: string) => void;
  cancel: () => void;
  isSpeechAvailable: boolean;
  error: string | null;
}

const SpeechSynthesisContext = React.createContext<
  SpeechSynthesisContextType | undefined
>(undefined);

export const useSpeechSynthesis = (): SpeechSynthesisContextType => {
  const context = React.useContext(SpeechSynthesisContext);
  if (!context) {
    throw new Error(
      'useSpeechSynthesis must be used within a SpeechSynthesisProvider',
    );
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const SpeechSynthesisProvider = ({ children }: Props) => {
  const { recruiterVoice } = useSettings();
  const [voice, setVoice] = React.useState<SpeechSynthesisVoice | null>(null);
  const [isSpeechAvailable, setIsSpeechAvailable] =
    React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSpeechAvailable(true);
      const handleVoicesChanged = () => {
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(
          (voice) => voice.lang === recruiterVoice,
        );
        if (selectedVoice) {
          setVoice(selectedVoice);
        } else {
          setError('Something went wrong while selecting the voice');
          setVoice(voices[0]);
        }
      };

      handleVoicesChanged();
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    } else {
      setIsSpeechAvailable(false);
      setError('Speech synthesis is not supported in this browser');
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [recruiterVoice]);

  const speak = (text: string) => {
    if (isSpeechAvailable && voice) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.voice = voice;
      window.speechSynthesis.speak(msg);
    } else {
      console.error('Speech synthesis is not available or voice is not set');
    }
  };

  const cancel = () => {
    if (isSpeechAvailable) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <SpeechSynthesisContext.Provider
      value={{ speak, cancel, isSpeechAvailable, error }}
    >
      {children}
    </SpeechSynthesisContext.Provider>
  );
};
