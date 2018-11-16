'use strict';

const day022 = require('../day022');

describe('Day022', function () {

  it('should return 34 for 2x3x4', function () {
    expect(day022('2x3x4')).toEqual(34);
  });

  it('should return 14 for 1x1x10', function () {
    expect(day022('1x1x10')).toEqual(14);
  });
});
