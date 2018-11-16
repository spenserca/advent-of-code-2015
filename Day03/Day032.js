const evenIndexValueReducer = (acc, currentVal, currentIndex) => {
  if (currentIndex % 2 === 0) {
    acc.push(currentVal);
  }

  return acc;
};

const oddIndexValueReducer = (acc, currentVal, currentIndex) => {
  if (currentIndex % 2 !== 0) {
    acc.push(currentVal);
  }

  return acc;
};

const isXAxisMovement = (direction) => direction === '>' || direction === '<';

const getCoordinateChange = (direction) => {
  if (direction === '>' || direction === '^') {
    return 1;
  }

  return -1;
};

const visitHouses = (directions) => {
  let x = 0,
    y = 0;
  const houses = directions.reduce((acc, current) => {
    if (isXAxisMovement(current)) {
      x += getCoordinateChange(current);
    } else {
      y += getCoordinateChange(current);
    }

    acc.push(`(${x},${y})`);

    return acc;
  }, ['(0,0)']);

  return houses;
};

module.exports = (input) => {
  const directions = input.split('');
  const santaDirections = directions.reduce(evenIndexValueReducer, []);
  const robotDirections = directions.reduce(oddIndexValueReducer, []);

  const santaVisits = visitHouses(santaDirections);
  const robotVisits = visitHouses(robotDirections);

  const totalVisits = santaVisits.concat(robotVisits);

  const total = new Set(totalVisits);

  return total.size;
};
