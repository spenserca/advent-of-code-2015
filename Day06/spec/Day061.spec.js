const day061 = require('../day061');

describe('Day061', function () {
  it('should return 1,000,000 for turn on 0,0 through 999,999', function () {
    expect(day061('turn on 0,0 through 999,999')).toEqual(1000000);
  });

  it('should return 1,000 for turn on 0,0 through 999,0', function () {
    expect(day061('turn on 0,0 through 999,0')).toEqual(1000);
  });
});
