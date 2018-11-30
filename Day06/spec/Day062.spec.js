const day062 = require('../day062');

describe('Day06.2', function () {
  it('should return 1 for turn on 0,0 through 0,0', function () {
    expect(day062('turn on 0,0 through 0,0')).toEqual(1);
  });

  it('should return 2,000,000 for toggle 0,0 through 999,999', function () {
    expect(day062('toggle 0,0 through 999,999')).toEqual(2000000);
  });

  it('should return 0 for turn off 0,0 through 999,999', function () {
    expect(day062('turn off 0,0 through 999,999')).toEqual(0);
  });
});
