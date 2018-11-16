'use strict';

const day021 = require('../day021');

describe('Day021', function () {

  it('should return 58 for 2x3x4', function () {
    expect(day021('2x3x4')).toEqual(58);
  });

  it('should return 43 for 1x1x10', function () {
    expect(day021('1x1x10')).toEqual(43);
  });
});
