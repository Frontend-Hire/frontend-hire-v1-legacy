import { GENDER_NEUTRAL_NAMES, Recruiter } from '../_constants';

export function fillPrompts(
  prompts: string[],
  recruiter: Recruiter,
  candidateName: string,
) {
  const namesSet = GENDER_NEUTRAL_NAMES[recruiter] || ['Simulant'];

  const recruiterName = namesSet[Math.floor(Math.random() * namesSet.length)];

  return prompts.map((prompt) =>
    prompt
      .replace('${recruiterName}', recruiterName)
      .replace('${candidateName}', candidateName),
  );
}
