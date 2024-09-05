export const code = `import React from 'react';
import CustomAudioControl from './CustomAudioControl';
import useVolume from './useVolume';

export default function App() {
  return (
    <div className="space-y-4 p-4">
      <AudioTest />
      <VideoTest />
    </div>
  );
}

function AudioTest() {
  // Use the custom hook here

  return (
    <div className="space-y-4 p-4">
      {/* In real world, we disable the default controls using JS */}
      <audio controls src="https://frontendhire.com/sample-audio.mp3" />
      <CustomAudioControl volume={1} setVolume={() => {}} />
    </div>
  );
}

function VideoTest() {
  // Use the custom hook here

  return (
    <div className="space-y-4 p-4">
      {/* In real world, we disable the default controls using JS */}
      <video controls src="https://frontendhire.com/sample-video.mp4" />
      <CustomAudioControl volume={1} setVolume={() => {}} />
    </div>
  );
}
`;
