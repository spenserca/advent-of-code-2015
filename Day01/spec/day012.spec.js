const day012 = require('../day012');

describe('Day012', () => {
  test('should return 1 for )', () => {
    expect(day012(')')).toEqual(1);
  });

  test('should return 5 for ()())', () => {
    expect(day012('()())')).toEqual(5);
  });
});
