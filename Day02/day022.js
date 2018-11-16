const getSmallestPerimeter = (dimensions) =>
  Math.min(
    2 * dimensions[0] + 2 * dimensions[1],
    2 * dimensions[1] + 2 * dimensions[2],
    2 * dimensions[2] + 2 * dimensions[0]
  );

const getVolume = (dimensions) =>
  dimensions[0] * dimensions[1] * dimensions[2];

module.exports = (input) => {
  const dimensions = input.split(',')
    .map((d) => d.split('x')
      .map((v) => parseInt(v)));
  let total = 0;

  dimensions.forEach((dimensionSet) => {
    total += getSmallestPerimeter(dimensionSet) + getVolume(dimensionSet);
  });

  return total;
};
