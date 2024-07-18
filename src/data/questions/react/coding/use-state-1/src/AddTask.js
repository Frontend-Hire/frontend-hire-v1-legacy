export const code = `// READ-ONLY FILE
import React from 'react';

export default function AddTask({ onAdd }) {
  const [task, setTask] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Add Task"
        className="border p-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type='submit'
        className="border border-green-500 bg-green-500 p-2 text-white"
      >
        Add
      </button>
    </form>
  );
}
`;
