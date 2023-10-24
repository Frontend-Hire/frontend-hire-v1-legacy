import { getBackPath } from './getBackPath';

describe('getBackPath', () => {
  test('empty pathname', () => {
    expect(getBackPath('')).toBe('');
  });

  test('one segment', () => {
    expect(getBackPath('/questions')).toBe('/dashboard');
  });

  test('two segments', () => {
    expect(getBackPath('/questions/HTML')).toBe('/questions');
  });

  test('three segments', () => {
    expect(getBackPath('/questions/HTML/somequestion')).toBe('/questions/HTML');
  });
});
