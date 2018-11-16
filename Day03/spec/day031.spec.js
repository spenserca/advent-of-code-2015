const day031 = require('../day031');

describe('Day031', function () {

  it('should return 2 for >', function () {
    expect(day031('>')).toEqual(2);
  });

  it('should return 4 for ^>v<', function () {
    expect(day031('^>v<')).toEqual(4);
  });

  it('should return 2 for ^v^v^v^v^v', function () {
    expect(day031('^v^v^v^v^v')).toEqual(2);
  });
});
