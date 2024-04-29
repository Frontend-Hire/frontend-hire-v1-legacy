'use client';

import hruthikImg from '@/assets/team/hruthikReddyInterviewer.jpeg';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export const TESTIMONIALS = [
  {
    name: 'Rajdeep Gupta',
    testimonial: (
      <p>
        <strong>I was truly impressed</strong> by the abundance of valuable
        feedback, insightful approaches, well-crafted answers, and engaging
        discussions. He{' '}
        <strong>
          provided concise and constructive feedback, along with actionable
          takeaways.
        </strong>{' '}
        I highly recommend this experience!
      </p>
    ),
  },
  {
    name: 'Nikhil',
    testimonial: (
      <p>
        It was great having mock interview with Hruthik. He provides{' '}
        <strong>
          a blunt and constructive feedback that helps in identifying weak
          points during an interview
        </strong>
        . He shares good resources and suggests resume tips as well.
      </p>
    ),
  },
  {
    name: 'Vinayak',
    testimonial: (
      <p>
        <strong>Loved the explanations</strong>, at regular intervals he
        emphasised on mistakes that are generally made and what should we do
        instead of that. And he had{' '}
        <strong>documented everything very well</strong>, so that we can go and
        refer after the session.
      </p>
    ),
  },
  {
    name: 'Himanshu Shekhar',
    testimonial: (
      <p>
        Informative. <strong>Like the way how he explained with clarity</strong>{' '}
        and keep check of the doubt from time to time.
      </p>
    ),
  },
  {
    name: 'Tanuj Mittal',
    testimonial: (
      <p>
        I liked giving this Mock Interview to Hruthik. He shared a{' '}
        <strong>very relevant feedback and well researched resources</strong> to
        rectify current gaps.
      </p>
    ),
  },
  {
    name: 'Ayush Govil',
    testimonial: (
      <p>
        Really grateful to meet Hruthik and{' '}
        <strong>gain valuable insights about studying abroad.</strong> He would
        dive deep to understand your queries and would then give you the best
        suggestion to you.{' '}
        <strong>Highly recommended to connect with him.</strong>
      </p>
    ),
  },
  {
    name: 'Sandeep Kumar Srivastava',
    testimonial: (
      <p>
        This was <strong>really fruitful conversation</strong>. He answered all
        my queries clearly, shared lots of resources that are{' '}
        <strong>important for the interview prep.</strong> Thank you very much!
      </p>
    ),
  },
  {
    name: 'Mainak Mukherjee',
    testimonial: (
      <>
        <p>
          <strong>
            {' '}
            Hruthik is truly an amazing guy and he is so damn helpful.
          </strong>{' '}
          He literally taught me how to set up a proper project. He would give
          the task and also guide me through it teaching the conventions and
          also making me apply it.
        </p>
        <p>
          The interview was supposed to be 45 min but he took it to 1 hr 40 min
          just to explain the points, give feedback and also making me feel
          comfortable. <strong>It was an incredible experience for me.</strong>
        </p>
      </>
    ),
  },
  {
    name: 'Ope',
    testimonial: (
      <p>
        This session was very helpful and insightful.{' '}
        <strong>
          He explained to me like he was explaining things to a baby and that
          made me understand exactly what he was talking about.
        </strong>{' '}
        Thank you for being so friendly!
      </p>
    ),
  },
  {
    name: 'Murali Singh',
    testimonial: (
      <p>
        I found Hruthik Reddy to be{' '}
        <strong>exceptionally helpful and courteous.</strong> He adeptly
        addressed all my inquiries, leaving me with a clear understanding. I
        look forward to reconnecting with him in the future.
      </p>
    ),
  },
];

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
      <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {TESTIMONIALS.map(({ name, testimonial }) => (
            <CarouselItem key={name}>
              <blockquote>
                {testimonial}
                <footer>— {name}</footer>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
