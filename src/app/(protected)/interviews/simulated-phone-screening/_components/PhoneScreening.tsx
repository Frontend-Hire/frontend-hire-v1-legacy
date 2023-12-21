'use client';

import * as React from 'react';
import Instructions from './Instructions';
import Progress from './Progress';

enum SimulationState {
  IDLE,
  INPROGRESS,
  ERROR,
  DONE,
}

export default function PhoneScreening() {
  const [simulation, setSimulation] = React.useState<SimulationState>(
    SimulationState.INPROGRESS,
  );

  const handleStart = () => {
    setSimulation(SimulationState.INPROGRESS);
  };

  if (simulation === SimulationState.IDLE) {
    return <Instructions onStart={handleStart} />;
  }

  if (simulation === SimulationState.INPROGRESS) {
    return <Progress />;
  }

  if (simulation === SimulationState.DONE) {
    return <div>Done</div>;
  }

  return null;
}
