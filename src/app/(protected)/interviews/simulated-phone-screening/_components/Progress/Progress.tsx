import * as React from 'react';
import Prompt from './Prompt';
import Response from './Response';
import { Button } from '@/components/ui/button';

export default function Progress() {
  const [currentStage, setCurrentStage] = React.useState(0);
  const totalStages = 2;

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
          <Prompt isActive={currentStage === stage} />
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
