import CustomCarousel from './CustomCarousel';

export default function GrowingLibrary() {
  return (
    <div className="flex grow flex-col gap-4">
      <p className="text-sm text-muted md:text-base">
        A Growing Library of <strong>30+ Questions</strong>,{' '}
        <strong>10+ Projects</strong>, <strong>2+ System Designs</strong>, and
        <strong> 2+ Courses</strong>
      </p>
      <CustomCarousel />
    </div>
  );
}
