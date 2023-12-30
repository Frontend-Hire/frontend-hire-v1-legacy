import { GENDER_NEUTRAL_NAMES, RecruiterVoice } from '../_constants';

export function fillPrompts(
  prompts: string[],
  recruiterVoice: RecruiterVoice,
  candidateName: string,
) {
  const namesSet = GENDER_NEUTRAL_NAMES[recruiterVoice] || ['Simulant'];

  const recruiterName = namesSet[Math.floor(Math.random() * namesSet.length)];

  return prompts.map((prompt) =>
    prompt
      .replace('${recruiterName}', recruiterName)
      .replace('${candidateName}', candidateName),
  );
}
