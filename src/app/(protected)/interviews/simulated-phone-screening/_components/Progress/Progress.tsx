import * as React from 'react';
import Prompt from './Prompt';
import Response from './Response';
import { Button } from '@/components/ui/button';

interface Props {
  candidateName: string;
}

export default function Progress({ candidateName }: Props) {
  const [currentStage, setCurrentStage] = React.useState(0);
  const totalStages = 2;

  const prompts = [
    `Hi, this is Rishi from Frontend Hire. May I confirm that I'm speaking with ${candidateName}?`,
    'Thank you for taking the time to speak with us today. Before we dive into specific questions, could you briefly introduce yourself and tell us a bit about your current role?',
    'I noticed on your resume that you have extensive experience in React. Could you tell me more about your experience in this area, particularly any projects you are most proud of?',
    'What motivates you to seek a new opportunity at this point in your career, and what specifically about our company and this role interests you?',
  ];

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
