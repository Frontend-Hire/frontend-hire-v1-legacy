'use client';

import React from 'react';
import Instructions from './Instructions';
import Progress from './Progress';

enum SimulationState {
  IDLE,
  INPROGRESS,
  ERROR,
  DONE,
}

type PhoneScreeningProps = {
  candidateName: string;
};

export default function PhoneScreening({ candidateName }: PhoneScreeningProps) {
  const [simulation, setSimulation] = React.useState<SimulationState>(
    SimulationState.IDLE,
  );

  const handleStart = () => {
    setSimulation(SimulationState.INPROGRESS);
  };

  const handleRestart = () => {
    setSimulation(SimulationState.IDLE);
  };

  if (simulation === SimulationState.IDLE) {
    return <Instructions onStart={handleStart} />;
  }

  if (simulation === SimulationState.INPROGRESS) {
    return <Progress candidateName={candidateName} onRestart={handleRestart} />;
  }

  if (simulation === SimulationState.DONE) {
    return <div>Done</div>;
  }

  return null;
}
