import hruthikImage from '@/assets/team/hruthikReddyInterviewer.jpeg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function WhoIsBuildingFrontendHire() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-3xl font-black">
        Who Is Building Frontend Hire?
      </h2>
      <div className="space-y-3">
        <AuthorCard
          image={hruthikImage}
          name="Hruthik Reddy"
          content={
            <>
              <p>{`I've been building web applications since 2020 and have worked with a few startups full-time and a lot of clients as a freelancer. Though I can work across the stacks, the bulk of my knowledge is in the UI department.`}</p>
              <p>
                I always wanted to fix education and{' '}
                <Link
                  className="text-link underline underline-offset-2"
                  prefetch={false}
                  href="/blog/major-update-1-journey-so-far"
                >
                  Frontend Hire is my current attempt
                </Link>{' '}
                to educate folks on the missing frontend skills that companies
                need. I am very practical and do not like to waste time. This
                also applies to the content on the platform, highly practical
                and quick to learn.
              </p>
              <p>
                The best way to connect or reach out to me is via{' '}
                <Link
                  href="https://www.linkedin.com/in/yarala-hruthik-reddy/"
                  prefetch={false}
                  className="text-link underline"
                >
                  LinkedIn
                </Link>{' '}
                or{' '}
                <Link
                  href="https://twitter.com/thisisyhr"
                  prefetch={false}
                  className="text-link underline"
                >
                  Twitter
                </Link>
                .
              </p>
            </>
          }
        />
        <AuthorCard
          image={hruthikImage}
          name="Hruthik Reddy"
          content={
            <>
              <p>{`I've been building web applications since 2020 and have worked with a few startups full-time and a lot of clients as a freelancer. Though I can work across the stacks, the bulk of my knowledge is in the UI department.`}</p>
              <p>
                I always wanted to fix education and{' '}
                <Link
                  className="text-link underline underline-offset-2"
                  prefetch={false}
                  href="/blog/major-update-1-journey-so-far"
                >
                  Frontend Hire is my current attempt
                </Link>{' '}
                to educate folks on the missing frontend skills that companies
                need. I am very practical and do not like to waste time. This
                also applies to the content on the platform, highly practical
                and quick to learn.
              </p>
              <p>
                The best way to connect or reach out to me is via{' '}
                <Link
                  href="https://www.linkedin.com/in/yarala-hruthik-reddy/"
                  prefetch={false}
                  className="text-link underline"
                >
                  LinkedIn
                </Link>{' '}
                or{' '}
                <Link
                  href="https://twitter.com/thisisyhr"
                  prefetch={false}
                  className="text-link underline"
                >
                  Twitter
                </Link>
                .
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}

function AuthorCard({
  image,
  name,
  content,
}: {
  image: StaticImageData;
  name: string;
  content: React.ReactNode;
}) {
  return (
    <div className="space-y-4 text-pretty rounded bg-card p-4 leading-relaxed">
      <Image
        className="float-right p-2"
        src={image}
        alt={`Portrait of ${name}`}
      />
      <h3 className="text-2xl font-bold">{`Hi, I'm ${name}!`}</h3>
      {content}
    </div>
  );
}
