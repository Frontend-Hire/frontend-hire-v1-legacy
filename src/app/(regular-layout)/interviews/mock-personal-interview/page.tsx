import VisuallyHidden from '@/components/ui/visually-hidden';
import { UserIcon } from 'lucide-react';
import InterviewerCard from './_components/InterviewerCard';

import CustomHeading from '@/components/CustomHeading';
import { INTERVIEWERS } from './interviewers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mock Personal Interview | Frontend Hire',
  description:
    'The only great way to prepare for actual interviews and get actionable feedback',
  openGraph: {
    title: 'Mock Personal Interview | Frontend Hire',
    description:
      'The only great way to prepare for actual interviews and get actionable feedback',
    url: 'https://frontendhire.com/interviews/mock-personal-interview',
  },
};

export default function MockPersonalInterview() {
  return (
    <main className="flex h-full flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <CustomHeading
        title="Mock In-Person Interview"
        subTitle="The only great way to prepare for actual interviews and get
            actionable feedback"
        icon={<UserIcon size={60} />}
      />

      <span className="flex items-center justify-center gap-[15px] rounded-full bg-secondary px-[5px] py-[10px] text-center text-sm font-extrabold sm:text-base sm:font-black">
        20% off the interviews through here
      </span>

      <VisuallyHidden>Available Interviews</VisuallyHidden>
      <ul className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
        {INTERVIEWERS.map((interviewer) => (
          <li key={interviewer.name}>
            <InterviewerCard {...interviewer} />
          </li>
        ))}
      </ul>
    </main>
  );
}
