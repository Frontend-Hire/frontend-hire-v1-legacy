export const code = `export default function Task({ task, idx, onDelete }) {
  return (
    <div className="my-2 flex items-center">
      <p className="border border-blue-500 p-2">
        {idx + 1}: {task.taskName}
      </p>
      <button
        onClick={onDelete}
        className="border border-red-500 bg-red-500 p-2 text-white"
      >
        Delete
      </button>
    </div>
  );
}
`;
