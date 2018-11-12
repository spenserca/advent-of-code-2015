module.exports = (input) => {
  let floorChanges = 1;

  input.split('')
    .reduce((acc, currentVal) => {
      if (currentVal === '(') {
        acc++;
      }

      if (currentVal === ')') {
        acc--;
      }

      if (acc !== -1) {
        floorChanges++;
      }

      return acc;
    }, 0);

  return floorChanges;
};
