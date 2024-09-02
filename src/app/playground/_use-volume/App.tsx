import React from 'react';
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
  const { ref, volume, setElementVolume } = useVolume<HTMLAudioElement>();

  return (
    <div className="space-y-4 p-4">
      {/* In real world, we disable the default controls using JS */}
      <audio ref={ref} controls src="/sample-audio.mp3" />
      <CustomAudioControl volume={volume} setVolume={setElementVolume} />
    </div>
  );
}

function VideoTest() {
  const { ref, volume, setElementVolume } = useVolume<HTMLVideoElement>();

  return (
    <div className="space-y-4 p-4">
      {/* In real world, we disable the default controls using JS */}
      <video ref={ref} controls src="/sample-video.mp4" />
      <CustomAudioControl volume={volume} setVolume={setElementVolume} />
    </div>
  );
}
