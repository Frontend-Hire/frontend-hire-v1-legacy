export const code = `// READ ONLY FILE

export default function CustomAudioControl({ volume, setVolume }) {
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
`;
