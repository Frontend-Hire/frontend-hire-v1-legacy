import { SkillQuestions } from '@/types/Question';
import { getSubmittedSkillQuestions } from './getSubmittedSkillQuestions';

describe('getSubmittedSkillQuestions', () => {
  it('calculates submitted skill questions when all ids match', () => {
    const allQuestions: SkillQuestions = {
      skill1: [
        { id: '1', title: 'asdsad', difficulty: 'easy' },
        { id: '2', title: 'dasdsa', difficulty: 'easy' },
      ],
      skill2: [{ id: '3', title: 'satsa', difficulty: 'easy' }],
    };

    const submittedQuestions = [
      { question_id: '1' },
      { question_id: '2' },
      { question_id: '3' },
    ];

    const skillStats = getSubmittedSkillQuestions(
      allQuestions,
      submittedQuestions,
    );

    expect(skillStats).toEqual({
      skill1: { total: 2, submitted: 2 },
      skill2: { total: 1, submitted: 1 },
    });
  });

  it('calculates submitted skill questions when no ids match', () => {
    const allQuestions: SkillQuestions = {
      skill1: [
        { id: '1', title: 'asdsad', difficulty: 'easy' },
        { id: '2', title: 'dasdsa', difficulty: 'easy' },
      ],
      skill2: [{ id: '3', title: 'satsa', difficulty: 'easy' }],
    };

    const submittedQuestions = [
      { question_id: '4' },
      { question_id: '5' },
      { question_id: '6' },
    ];

    const skillStats = getSubmittedSkillQuestions(
      allQuestions,
      submittedQuestions,
    );

    expect(skillStats).toEqual({
      skill1: { total: 2, submitted: 0 },
      skill2: { total: 1, submitted: 0 },
    });
  });

  it('calculates submitted skill questions when submitted ids is empty', () => {
    const allQuestions: SkillQuestions = {
      skill1: [
        { id: '1', title: 'asdsad', difficulty: 'easy' },
        { id: '2', title: 'dasdsa', difficulty: 'easy' },
      ],
      skill2: [{ id: '3', title: 'satsa', difficulty: 'easy' }],
    };

    const submittedQuestions: { question_id: string }[] = [];

    const skillStats = getSubmittedSkillQuestions(
      allQuestions,
      submittedQuestions,
    );

    expect(skillStats).toEqual({
      skill1: { total: 2, submitted: 0 },
      skill2: { total: 1, submitted: 0 },
    });
  });

  it('calculates submitted skill questions when all questions is empty', () => {
    const allQuestions: SkillQuestions = {};

    const submittedQuestions: { question_id: string }[] = [];

    const skillStats = getSubmittedSkillQuestions(
      allQuestions,
      submittedQuestions,
    );

    expect(skillStats).toEqual({});
  });
});
