import CustomHeading from '@/components/CustomHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Frontend Hire',
  description: 'A little about us and our mission',
  openGraph: {
    title: 'About | Frontend Hire',
    description: 'A little about us and our mission',
    url: 'https://frontendhire.com/about',
  },
};

export default function AboutPage() {
  return (
    <article>
      <CustomHeading
        title="About"
        subTitle="A little about us and our mission"
      />
    </article>
  );
}
