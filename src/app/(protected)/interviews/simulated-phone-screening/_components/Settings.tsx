import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ExperienceLevel, Recruiter } from '../_constants';
import { useSettings } from '../_context/SettingsContext';

export default function Settings() {
  const { experienceLevel, recruiter, updateExperienceLevel, updateRecruiter } =
    useSettings();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>Experience in Years:</Label>
        <RadioGroup
          orientation="horizontal"
          className="flex flex-wrap gap-2"
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
      <div className="flex flex-col gap-2">
        <Label>Recruiter</Label>
        <RadioGroup
          orientation="horizontal"
          className="flex flex-wrap gap-2"
          defaultValue={Recruiter.Indian}
          value={recruiter}
          onValueChange={updateRecruiter}
        >
          {Object.entries(Recruiter).map(([label, value]) => (
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
