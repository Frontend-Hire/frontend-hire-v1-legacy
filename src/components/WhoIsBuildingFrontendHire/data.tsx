import hruthikImage from '@/assets/team/hruthikReddyInterviewer.jpeg';
import umeshImage from '@/assets/team/umeshMalik.jpg';
import Link from 'next/link';

const WHO_IS_BUILDING_FRONTEND_HIRE = [
  {
    name: 'Hruthik Reddy',
    image: hruthikImage,
    content: (
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
          to educate folks on the missing frontend skills that companies need. I
          am very practical and do not like to waste time. This also applies to
          the content on the platform, highly practical and quick to learn.
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
    ),
  },
  {
    name: 'Umesh Malik',
    image: umeshImage,
    content: (
      <>
        <p>
          Hi, I&apos;m Umesh. I&apos;ve been a full-stack developer for more
          than 3 years now. I&apos;ve always been fascinated by the intersection
          of design and technology. I&apos;ve had the opportunity to work on a
          variety of projects, from small business websites to large-scale web
          applications. Even though I&apos;ve been a full-stack developer, I
          have a strong preference for the frontend side of things.
        </p>
        <p>
          I worked for some of the biggest organizations in the past like{' '}
          <Link
            href="https://www.tekion.com/"
            prefetch={false}
            target="_blank"
            className="text-link underline"
          >
            Tekion Corp
          </Link>
          ,{' '}
          <Link
            href="https://www.byjus.com/"
            prefetch={false}
            target="_blank"
            className="text-link underline"
          >
            Byju&apos;s
          </Link>
          , and currently working at{' '}
          <Link
            href="https://www.expedia.com/"
            prefetch={false}
            target="_blank"
            className="text-link underline"
          >
            Expedia Group
          </Link>
          . The best way to connect or reach out to me is via{' '}
          <Link
            href="https://www.linkedin.com/in/umesh-malik/"
            prefetch={false}
            target="_blank"
            className="text-link underline"
          >
            LinkedIn
          </Link>{' '}
          or{' '}
          <Link
            href="https://twitter.com/lumeshmalik"
            prefetch={false}
            target="_blank"
            className="text-link underline"
          >
            Twitter
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default WHO_IS_BUILDING_FRONTEND_HIRE;
