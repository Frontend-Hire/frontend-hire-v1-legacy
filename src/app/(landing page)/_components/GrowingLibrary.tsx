import CustomCarousel from './CustomCarousel';

export default function GrowingLibrary() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-sm text-muted md:text-base">
        A Growing Library of <strong>20+ Questions</strong> and
        <strong> 4+ Courses</strong>!
      </p>
      <CustomCarousel />
    </div>
  );
}
