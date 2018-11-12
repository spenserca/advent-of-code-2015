const day011 = require('../day011');

describe('Day011', () => {
  test('should return 0 for (())', () => {
    expect(day011('(())')).toEqual(0);
  });

  test('should return 0 for ()()', () => {
    expect(day011('()()')).toEqual(0);
  });

  test('should return 3 for (((', () => {
    expect(day011('(((')).toEqual(3);
  });

  test('should return 3 for (()(()(', () => {
    expect(day011('(()(()(')).toEqual(3);
  });

  test('should return 3 for ))(((((', () => {
    expect(day011('))(((((')).toEqual(3);
  });

  test('should return -1 for ())', () => {
    expect(day011('())')).toEqual(-1);
  });

  test('should return -1 for ))(', () => {
    expect(day011('))(')).toEqual(-1);
  });

  test('should return -3 for )))', () => {
    expect(day011(')))')).toEqual(-3);
  });

  test('should return -3 for )())())', () => {
    expect(day011(')())())')).toEqual(-3);
  });
});
