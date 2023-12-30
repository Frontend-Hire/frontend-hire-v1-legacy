export enum ExperienceLevel {
  Entry = '0-1 Years (Entry Level)',
  Intermediate = '1-2 Years',
  Advanced = '2-4 Years',
}

export enum RecruiterVoice {
  Indian = 'en-IN',
  American = 'en-US',
  British = 'en-GB',
}

export const GENDER_NEUTRAL_NAMES: {
  [key in RecruiterVoice]: string[];
} = {
  'en-IN': ['Kiran', 'Rishi'],
  'en-US': ['Taylor', 'Casey'],
  'en-GB': ['Alex', 'Morgan'],
};

export const PROMPTS: {
  [key in ExperienceLevel]: {
    prompts: string[];
  }[];
} = {
  '0-1 Years (Entry Level)': [
    {
      prompts: [
        "Hi, this is ${recruiterName} from Frontend Hire. May I confirm that I'm speaking with ${candidateName}?",
        "Thanks for taking the time to speak with us. As someone at the start of your career, can you share what you've learned from your education and any internships or projects that you feel are relevant to this role?",
        "Given your recent entry into the professional field, what are the key skills or experiences you're hoping to gain in your first full-time role?",
        "What aspects of our company's mission and the entry-level position here sparked your interest in applying?",
      ],
    },
  ],
  '1-2 Years': [
    {
      prompts: [
        "Hello, this is ${recruiterName} from Frontend Hire. Can I please confirm that I'm speaking with ${candidateName}?",
        "Thank you for your time today. With a few years of experience under your belt, could you describe your professional journey so far and how it aligns with the role you're applying for?",
        "You've gained some valuable experience in the field. What project or accomplishment are you most proud of, and what did it teach you?",
        "What's motivating you to explore new opportunities at this stage in your career, and what aspects of our organization and this mid-level role attracted you?",
      ],
    },
  ],
  '2-4 Years': [
    {
      prompts: [
        "Good day, this is ${recruiterName} from Frontend Hire. May I confirm that I'm on the line with ${candidateName}?",
        'We appreciate you taking the time to speak with us. With your substantial experience, could you give us an overview of your professional background and how it has prepared you for a senior role?',
        'Considering your significant industry experience, could you discuss a challenging project you led and the impact it had?',
        'At this advanced stage in your career, what drives you to seek new challenges, and what specifically about our company and this senior position interests you?',
      ],
    },
  ],
};
