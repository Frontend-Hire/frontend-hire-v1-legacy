import React from 'react';

export default function useVolume<T extends HTMLMediaElement>(
  defaultVolume: number = 1,
) {
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
