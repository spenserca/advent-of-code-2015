module.exports = (input) => {
  let currentFloor = 0;

  const floorsVisited = input.split('')
    .map((value) => {
      if (value === '(') {
        currentFloor++;
      }

      if (value === ')') {
        currentFloor--;
      }

      return currentFloor;
    });

  return floorsVisited.indexOf(-1) + 1;
};
