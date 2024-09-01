import React from 'react';

export default function App() {
  const { ref, volume, setElementVolume } = useVolume();

  return (
    <div>
      <audio ref={ref} src="path/to/audio.mp3" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setElementVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}

function useVolume<T extends HTMLMediaElement>(defaultVolume: number = 1) {
  const [volume, setVolume] = React.useState(defaultVolume);
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  const setElementVolume = (newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  };

  return { ref, volume, setElementVolume };
}
