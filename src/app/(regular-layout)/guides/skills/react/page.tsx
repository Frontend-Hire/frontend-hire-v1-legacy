import Image from 'next/image';
import Heading from '@/components/Heading';
import ReactLogo from '@/assets/toollogos/react.png';
import SpecialText from '@/components/SpecialText';
import GuideSpecialItem from '@/components/GuideSpecialItem';
import { COURSE_ITEMS } from './constants';
import { Metadata } from 'next';
import Link from 'next/link';
import CustomHeading from '@/components/CustomHeading';

export const metadata: Metadata = {
  title: 'React Learning Guide | Frontend Hire',
  description: 'Our compilation of best resources out there',
};

export default function ReactSkillGuide() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <article className="flex flex-col gap-[20px] py-[10px]">
        <CustomHeading
          title="React Learning Guide"
          subTitle="Our compilation of best resources out there"
          icon={<Image src={ReactLogo} alt="" />}
        />

        <section className="flex flex-col gap-[10px]">
          <Heading variant="h3">Frontend Hire Tips</Heading>
          <ul className="ml-4 list-disc">
            <li>
              Do <SpecialText>not</SpecialText> jump directly into React without
              learning <SpecialText>foundational JavaScript!</SpecialText>
            </li>
            <li>
              React at <SpecialText>its core is simple</SpecialText>, most of
              the complexity comes from the ecosystem of React.
            </li>
            <li>
              If your <SpecialText>foundations are strong</SpecialText>, you can
              easily be comfortable in the React ecosystem.
            </li>
            <li>
              Learn the different{' '}
              <SpecialText>component design patterns</SpecialText> as quickly as
              possible.
            </li>
            <li>
              Have{' '}
              <Link target="_blank" href="https://roadmap.sh/react">
                <SpecialText isLink>this roadmap from roadmap.sh</SpecialText>
              </Link>{' '}
              in your bookmarks and refer to it often.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-[10px]">
          <Heading variant="h3">Our Top List Of Courses To Do</Heading>
          <p className="text-sm text-gray-300">
            Choose only one, immediately switch if chosen one does not suit your
            learning style (
            <SpecialText>money can be earned back but time?</SpecialText>)
          </p>
          <ol className="flex flex-col gap-[10px]">
            {COURSE_ITEMS.map((item) => (
              <li key={item.link}>
                <GuideSpecialItem {...item} />
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
