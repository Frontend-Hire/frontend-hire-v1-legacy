'use client';

import * as React from 'react';
import { ExperienceLevel, RecruiterVoice } from '../_constants';

type Settings = {
  experienceLevel: ExperienceLevel;
  recruiterVoice: RecruiterVoice;
  updateExperienceLevel: (level: ExperienceLevel) => void;
  updateRecruiterVoice: (voice: RecruiterVoice) => void;
};

const SettingsContext = React.createContext<Settings>({
  experienceLevel: ExperienceLevel.Entry,
  recruiterVoice: RecruiterVoice.Indian,
  updateExperienceLevel: () => {},
  updateRecruiterVoice: () => {},
});

export const useSettings = () => React.useContext(SettingsContext);

interface Props {
  children: React.ReactNode;
}

export default function SettingsProvider({ children }: Props) {
  const [experienceLevel, setExperienceLevel] = React.useState<ExperienceLevel>(
    ExperienceLevel.Entry,
  );
  const [recruiterVoice, setRecruiterVoice] = React.useState<RecruiterVoice>(
    RecruiterVoice.Indian,
  );

  const updateExperienceLevel = (level: ExperienceLevel) =>
    setExperienceLevel(level);
  const updateRecruiterVoice = (voice: RecruiterVoice) =>
    setRecruiterVoice(voice);

  return (
    <SettingsContext.Provider
      value={{
        experienceLevel,
        recruiterVoice,
        updateExperienceLevel,
        updateRecruiterVoice,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
