import * as React from 'react';
import Prompt from './Prompt';
import Response from './Response';
import { Button } from '@/components/ui/button';
import { useSettings } from '../../_context/SettingsContext';
import { fillPrompts } from '../../_utils';
import { PROMPTS } from '../../_constants';

interface Props {
  candidateName: string;
}

export default function Progress({ candidateName }: Props) {
  const { recruiterVoice, experienceLevel } = useSettings();
  const [currentStage, setCurrentStage] = React.useState(0);
  const totalStages = 2;

  const prompts = fillPrompts(
    PROMPTS[experienceLevel][0].prompts,
    recruiterVoice,
    candidateName,
  );

  const handleStageCompletion = () => {
    if (currentStage < totalStages) {
      setCurrentStage(currentStage + 1);
    }
  };

  const renderStages = () => {
    let stages = [];
    for (let stage = 0; stage <= currentStage; stage++) {
      stages.push(
        <React.Fragment key={stage}>
          <Prompt isActive={currentStage === stage} text={prompts[stage]} />
          <Response isActive={currentStage === stage} />
        </React.Fragment>,
      );
    }
    return stages;
  };

  return (
    <div className="flex flex-col gap-[20px]">
      {renderStages()}
      {currentStage < totalStages && (
        <Button onClick={handleStageCompletion}>Continue</Button>
      )}
    </div>
  );
}
