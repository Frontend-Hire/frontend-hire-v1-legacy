export const code = `import React from 'react';

export default function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, [seconds]);

  return (
    <div className="text-center p-4">
      <p>Timer: {seconds} Seconds</p>
      <button
        className="bg-red-500 p-2 rounded hover:bg-red-600"
        onClick={() => setSeconds(0)}
      >
        Reset Timer
      </button>
    </div>
  );
}
`;
