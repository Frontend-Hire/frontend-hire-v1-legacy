import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ExperienceLevel, RecruiterVoice } from '../_constants';
import { useSettings } from '../_context/SettingsContext';

export default function Settings() {
  const {
    experienceLevel,
    recruiterVoice,
    updateExperienceLevel,
    updateRecruiterVoice,
  } = useSettings();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex flex-col gap-[10px]">
        <Label>Experience in Years:</Label>
        <RadioGroup
          orientation="horizontal"
          className="flex flex-wrap gap-[10px]"
          defaultValue={ExperienceLevel.Entry}
          value={experienceLevel}
          onValueChange={updateExperienceLevel}
        >
          {Object.values(ExperienceLevel).map((value) => (
            <div key={value} className="flex gap-[5px]">
              <RadioGroupItem id={value} value={value} />
              <Label htmlFor={value}>{value}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label>Recruiter Voice</Label>
        <RadioGroup
          orientation="horizontal"
          className="flex flex-wrap gap-[10px]"
          defaultValue={RecruiterVoice.Indian}
          value={recruiterVoice}
          onValueChange={updateRecruiterVoice}
        >
          {Object.entries(RecruiterVoice).map(([label, value]) => (
            <div key={value} className="flex gap-[5px]">
              <RadioGroupItem id={value} value={value} />
              <Label htmlFor={value}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
