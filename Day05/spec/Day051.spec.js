const day051 = require('../day051');

describe('Day05.1', () => {
  it('should return 1 for ugknbfddgicrmopn', function () {
    expect(day051('ugknbfddgicrmopn')).toEqual(1);
  });

  it('should return 1 for aaa', function () {
    expect(day051('aaa')).toEqual(1);
  });

  it('should return 0 for jchzalrnumimnmhp', function () {
    expect(day051('jchzalrnumimnmhp')).toEqual(0);
  });

  it('should return 0 for haegwjzuvuyypxyu', function () {
    expect(day051('haegwjzuvuyypxyu')).toEqual(0);
  });

  it('should return 0 for dvszwmarrgswjxmb', function () {
    expect(day051('dvszwmarrgswjxmb')).toEqual(0);
  });
});
