import { TESTIMONIALS } from '@/constants/testimonials';
import { GemIcon } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">Testimonials</h2>
      <MobileTestimonials />
      <DesktopTestimonials />
    </section>
  );
}

function MobileTestimonials() {
  return (
    <div className="flex flex-col gap-5 sm:hidden">
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.author} {...testimonial} />
      ))}
    </div>
  );
}

function DesktopTestimonials() {
  return (
    <div className="hidden gap-5 sm:grid sm:grid-cols-2">
      <div className="flex flex-col gap-5">
        {TESTIMONIALS.slice(0, 1 + TESTIMONIALS.length / 2).map(
          (testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ),
        )}
      </div>
      <div className="flex flex-col gap-5">
        {TESTIMONIALS.slice(1 + TESTIMONIALS.length / 2).map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  author,
  testimonial,
  role,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="h-fit space-y-4 rounded bg-card p-4">
      <div>
        <div className="flex items-center justify-between gap-2 text-lg font-bold">
          <span>{author}</span>
          <span className="flex gap-1">
            <GemIcon className="text-link" />
            <GemIcon className="text-link" />
            <GemIcon className="text-link" />
            <GemIcon className="text-link" />
            <GemIcon className="text-link" />
          </span>
        </div>
        <div className="text-sm text-muted">{role}</div>
      </div>
      <div className="leading-relaxed">{testimonial}</div>
    </div>
  );
}
