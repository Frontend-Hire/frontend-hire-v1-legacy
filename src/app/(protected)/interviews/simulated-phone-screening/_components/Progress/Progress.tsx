import * as React from 'react';
import Prompt from './Prompt';
import Response from './Response';
import { Button } from '@/components/ui/button';
import { useSettings } from '../../_context/SettingsContext';
import { fillPrompts } from '../../_utils';
import { PROMPTS } from '../../_constants';

interface Props {
  candidateName: string;
  onRestart: () => void;
}

export default function Progress({ candidateName, onRestart }: Props) {
  const { recruiter, experienceLevel } = useSettings();
  const [currentStage, setCurrentStage] = React.useState(0);

  const prompts = fillPrompts(
    PROMPTS[experienceLevel][0].prompts,
    recruiter,
    candidateName,
  );

  const handleStageCompletion = () => {
    if (currentStage < prompts.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const renderStages = () => {
    let stages = [];
    for (let stage = 0; stage <= currentStage; stage++) {
      stages.push(
        <React.Fragment key={stage}>
          <Prompt isActive={currentStage === stage} text={prompts[stage]} />
          <Response
            isActive={currentStage === stage}
            isFinal={currentStage === prompts.length - 1}
            onCompletion={handleStageCompletion}
          />
        </React.Fragment>,
      );
    }
    return stages;
  };

  return (
    <div className="flex flex-col gap-[20px]">
      {renderStages()}
      {currentStage === prompts.length - 1 && (
        <Button onClick={onRestart}>Restart</Button>
      )}
    </div>
  );
}
