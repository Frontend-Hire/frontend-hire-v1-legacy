export default function SubmittedQuestions() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-sm bg-gray-300 text-center">
      <p className="text-lg font-medium">Questions Submitted</p>
      <p className="text-6xl sm:text-7xl">
        <span className="font-semibold">3</span>
        <span className="relative font-black">/</span>
        <span className="relative font-semibold">10</span>
      </p>
    </div>
  );
}
