import Image from 'next/image';
import { Star } from 'lucide-react';
import Avatar from '/public/avatar.jpg';

export default function Testimonials() {
  return (
    <section className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 max-w-2xl text-left">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Testimonials
          </p>
          <p className="mt-6 text-lg leading-8 text-lightest">
            Listen to what people have to say about Frontend-Hire.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <div className="flex gap-x-1 text-brand">
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg font-semibold leading-8">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={Avatar}
                  alt="Judith Black"
                />
                <div className="text-base">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1 text-lightest">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <div className="flex gap-x-1 text-brand">
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
              <Star
                className="h-5 w-5 flex-none fill-brand"
                aria-hidden="true"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg font-semibold leading-8">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={Avatar}
                  alt="Judith Black"
                />
                <div className="text-base">
                  <div className="font-semibold">Joseph Rodriguez</div>
                  <div className="text-lighhtest mt-1">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
