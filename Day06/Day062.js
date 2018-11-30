const buildGrid = () => {
  const grid = [];

  for (let x = 0; x < 1000; x++) {
    const row = [];

    for (let y = 0; y < 1000; y++) {
      row.push({
        brightness: 0,
        x,
        y
      });
    }

    grid.push(row);
  }

  return grid;
};

const turnOff = (currentBrightness) => {
  let brightness = currentBrightness;

  if (brightness === 0) {
    return brightness;
  }

  brightness -= 1;

  return brightness;
};

const processInstruction = (instruction, currentBrightness) => {
  let brightness = currentBrightness;

  if (instruction === 'on') {
    brightness += 1;
  } else if (instruction === 'off') {
    brightness = turnOff(brightness);
  } else if (instruction === 'toggle') {
    brightness += 2;
  }

  return brightness;
};

module.exports = (input) => {
  const instructions = input.split('\r\n')
    .filter((i) => i)
    .map((i) => ({
      endPosition: i.match(/([0-9]{1,3},[0-9]{1,3})/g)[1],
      instruction: i.match(/(on)|(off)|(toggle)/g)[0],
      startingPosition: i.match(/([0-9]{1,3},[0-9]{1,3})/g)[0]
    }));

  const grid = buildGrid();

  instructions.forEach((instruction) => {
    const startX = parseInt(instruction.startingPosition.split(',')[0]);
    const startY = parseInt(instruction.startingPosition.split(',')[1]);
    const endX = parseInt(instruction.endPosition.split(',')[0]);
    const endY = parseInt(instruction.endPosition.split(',')[1]);

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        const currentBrightness = grid[x][y].brightness;

        grid[x][y].brightness = processInstruction(instruction.instruction, currentBrightness);
      }
    }
  });

  let brightness = 0;

  for (let x = 0; x < grid.length; x++) {
    const row = grid[x];

    brightness += row.reduce((sum, current) =>
      sum + current.brightness, 0);
  }

  return brightness;
};
