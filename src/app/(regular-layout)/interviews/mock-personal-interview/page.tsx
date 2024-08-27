import VisuallyHidden from '@/components/ui/visually-hidden';
import { UserIcon } from 'lucide-react';
import InterviewerCard from './_components/InterviewerCard';
import CustomHeading from '@/components/CustomHeading';
import { INTERVIEWERS } from './interviewers';
import { getMetadata } from '@/lib/getMetadata';

export const metadata = getMetadata({
  title: 'Mock Personal Interview | Frontend Hire',
  description:
    'The only great way to prepare for actual interviews and get actionable feedback.',
  canonical: '/interviews/mock-personal-interview',
});

export default function MockPersonalInterview() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Mock In-Person Interview"
        subTitle="The only great way to prepare for actual interviews and get
            actionable feedback"
        icon={<UserIcon size={60} />}
      />

      <VisuallyHidden>Available Interviews</VisuallyHidden>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {INTERVIEWERS.map((interviewer) => (
          <li key={interviewer.name}>
            <InterviewerCard {...interviewer} />
          </li>
        ))}
      </ul>
    </article>
  );
}
