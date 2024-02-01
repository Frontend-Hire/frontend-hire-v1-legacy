import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { UserIcon } from 'lucide-react';
import InterviewerCard from './_components/InterviewerCard';
import { INTERVIEWERS } from './interviewers';

export default function MockPersonalInterview() {
  return (
    <main className="flex flex-col gap-[20px] p-[10px] md:px-[100px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col gap-[15px] py-[10px]">
          <Heading variant="h1">Mock In-Person Interview</Heading>
          <p className="text-sm text-muted">
            The only great way to prepare for actual interviews and get
            actionable feedback
          </p>
        </div>
        <UserIcon size={60} />
      </div>
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
