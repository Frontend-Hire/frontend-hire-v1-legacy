import hruthikImg from '@/assets/team/hruthikReddyInterviewer.jpeg';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';

export default function TeacherCard({ children }: React.PropsWithChildren) {
  return (
    <div className="rounded bg-card px-4">
      <div className="grid items-center justify-center justify-items-center gap-2 sm:grid-cols-2 sm:gap-4">
        <div>{children}</div>
        <Image
          className="rounded"
          src={hruthikImg}
          placeholder="blur"
          alt="Hruthik Reddy"
        />
      </div>
      <TestimonialCarousel />
    </div>
  );
}
