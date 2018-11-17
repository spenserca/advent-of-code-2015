const day052 = require('../day052');

describe('Day05.2', () => {
  it('should return 1 for qjhvhtzxzqqjkmpb', () => {
    expect(day052('qjhvhtzxzqqjkmpb')).toEqual(1);
  });

  it('should return 1 for xxyxx', () => {
    expect(day052('xxyxx')).toEqual(1);
  });

  it('should return 0 for uurcxstgmygtbstg', () => {
    expect(day052('uurcxstgmygtbstg')).toEqual(0);
  });

  it('should return 0 for ieodomkazucvgmuy', () => {
    expect(day052('ieodomkazucvgmuy')).toEqual(0);
  });

  it('should return 1 for yzsmlbnftftgwadz', () => {
    expect(day052('yzsmlbnftftgwadz')).toEqual(1);
  });
});
