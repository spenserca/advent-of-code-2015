const getSurfaceArea = (dimensions) =>
  2 * dimensions[0] * dimensions[1]
  + 2 * dimensions[1] * dimensions[2]
  + 2 * dimensions[2] * dimensions[0];

const getSmallestSideArea = (dimensions) =>
  Math.min(
    dimensions[0] * dimensions[1],
    dimensions[1] * dimensions[2],
    dimensions[2] * dimensions[0]
  );

module.exports = (input) =>
  input.split(',')
    .reduce((acc, current) => {
      let accCopy = acc;

      const dimensions = current.split('x')
        .map((d) => parseInt(d));

      accCopy += getSurfaceArea(dimensions) + getSmallestSideArea(dimensions);

      return accCopy;
    }, 0);
