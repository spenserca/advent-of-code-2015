const day032 = require('../day032');

describe('Day032', function () {

  it('should return 3 for ^v', function () {
    expect(day032('^v')).toEqual(3);
  });

  it('should return 3 for ^>v<', function () {
    expect(day032('^>v<')).toEqual(3);
  });

  it('should return 11 for ^v^v^v^v^v', function () {
    expect(day032('^v^v^v^v^v')).toEqual(11);
  });
});
