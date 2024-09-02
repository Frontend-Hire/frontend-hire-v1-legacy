// READ ONLY FILE

export default function CustomAudioControl({
  volume,
  setVolume,
}: {
  volume: number;
  setVolume: (volume: number) => void;
}) {
  return (
    <input
      value={volume}
      onChange={(e) => setVolume(parseFloat(e.target.value))}
      type="range"
      min="0"
      max="1"
      step="0.1"
    />
  );
}
