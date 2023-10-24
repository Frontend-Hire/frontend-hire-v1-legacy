export default function DifficultyLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <span className="h-6 w-2 bg-green-500" />
        Easy
      </div>
      <div className="flex items-center gap-2">
        <span className="h-6 w-2 bg-yellow-500" />
        Medium
      </div>
      <div className="flex items-center gap-2">
        <span className="h-6 w-2 bg-red-500" />
        Hard
      </div>
      <div className="flex items-center gap-2">
        <span className="h-6 w-2 bg-gray-500" />
        Master
      </div>
    </div>
  );
}
