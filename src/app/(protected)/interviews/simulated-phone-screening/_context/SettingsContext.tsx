'use client';

import * as React from 'react';
import { ExperienceLevel, Recruiter } from '../_constants';

type Settings = {
  experienceLevel: ExperienceLevel;
  recruiter: Recruiter;
  updateExperienceLevel: (level: ExperienceLevel) => void;
  updateRecruiter: (recruiter: Recruiter) => void;
};

const SettingsContext = React.createContext<Settings>({
  experienceLevel: ExperienceLevel.Entry,
  recruiter: Recruiter.Indian,
  updateExperienceLevel: () => {},
  updateRecruiter: () => {},
});

export const useSettings = () => React.useContext(SettingsContext);

export default function SettingsProvider({
  children,
}: React.PropsWithChildren) {
  const [experienceLevel, setExperienceLevel] = React.useState<ExperienceLevel>(
    ExperienceLevel.Entry,
  );
  const [recruiter, setRecruiter] = React.useState<Recruiter>(Recruiter.Indian);

  const updateExperienceLevel = (level: ExperienceLevel) =>
    setExperienceLevel(level);
  const updateRecruiter = (recruiter: Recruiter) => setRecruiter(recruiter);

  return (
    <SettingsContext.Provider
      value={{
        experienceLevel,
        recruiter,
        updateExperienceLevel,
        updateRecruiter,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
