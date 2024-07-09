export const code = `import React from 'react';

export default function AddTask({ onAdd }) {
  const [task, setTask] = React.useState('');

  const handleAddTask = () => {
    onAdd(task);
    setTask('');
  };

  return (
    <div className="mb-4">
      <input
        placeholder="Add Task"
        className="border p-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className="border border-green-500 bg-green-500 p-2 text-white"
      >
        Add
      </button>
    </div>
  );
}
`;
