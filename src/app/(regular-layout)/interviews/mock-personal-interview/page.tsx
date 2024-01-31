import Heading from '@/components/Heading';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { UserIcon } from 'lucide-react';
import InterviewerCard from './_components/InterviewerCard';

import hruthikImage from './_assets/hruthikReddyInterviewer.jpeg';
import deepakImage from './_assets/deepakSharmaInterviewer.jpeg';

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
        <li>
          <InterviewerCard
            avatar={hruthikImage}
            name="Hruthik Reddy"
            headline="Building Frontend Hire"
            badge="Top 1%"
            description="Perfect for folks with less than 2 years of frontend experience."
            linkedIn="https://www.linkedin.com/in/yarala-hruthik-reddy/"
            bookingLink="https://topmate.io/iamyhr/362939?coupon_code=FRONTENDHIRE"
          />
        </li>
        <li>
          <InterviewerCard
            avatar={deepakImage}
            name="Deepak Sharma"
            headline="UI Engineer at ACKO"
            badge="Top 1%"
            description="Level up your React JS Interview with Personalized Mock Interviews!"
            linkedIn="https://www.linkedin.com/in/depaksharma/"
            bookingLink="https://topmate.io/deepak_sharma/493434?coupon_code=FRONTENDHIRE20"
          />
        </li>
      </ul>
    </main>
  );
}
