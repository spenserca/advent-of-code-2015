const isXAxisMovement = (direction) => direction === '>' || direction === '<';

const getCoordinateChange = (direction) => {
  if (direction === '>' || direction === '^') {
    return 1;
  }

  return -1;
};

module.exports = (input) => {
  const directions = input.split('');
  let x = 0,
    y = 0;

  const houses = directions.reduce((acc, current) => {
    if (isXAxisMovement(current)) {
      x += getCoordinateChange(current);
    } else {
      y += getCoordinateChange(current);
    }

    acc.add(`(${x},${y})`);

    return acc;
  }, new Set(['(0,0)']));

  return houses.size;
};
