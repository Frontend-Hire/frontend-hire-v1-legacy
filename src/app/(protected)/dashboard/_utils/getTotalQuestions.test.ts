import { SkillQuestions } from '@/types/Question';
import { getTotalQuestions } from './getTotalQuestions';

describe('getTotalQuestions', () => {
  it('calculates total questions correctly when empty questions passed', () => {
    const allQuestions: SkillQuestions = {};

    const totalQuestions = getTotalQuestions(allQuestions);
    expect(totalQuestions).toBe(0);
  });

  it('calculates total questions correctly', () => {
    const allQuestions: SkillQuestions = {
      skill1: [
        { id: 'random', title: 'asdsad', difficulty: 'easy' },
        { id: 'random 2', title: 'dasdsa', difficulty: 'easy' },
      ],
      skill2: [{ id: 'random 3', title: 'satsa', difficulty: 'easy' }],
    };

    const totalQuestions = getTotalQuestions(allQuestions);
    expect(totalQuestions).toBe(3);
  });
});
