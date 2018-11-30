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

const processInstruction = (instruction, currentlyOn) => {
  let isOn = currentlyOn;

  if (instruction === 'on') {
    isOn = true;
  } else if (instruction === 'off') {
    isOn = false;
  } else if (instruction === 'toggle') {
    isOn = !isOn;
  }

  return isOn;
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
        const currentIsOn = grid[x][y].isOn;

        grid[x][y].isOn = processInstruction(instruction.instruction, currentIsOn);
      }
    }
  });

  let lightsOn = 0;

  for (let i = 0; i < grid.length; i++) {
    lightsOn += grid[i].filter((light) => light.isOn).length;
  }

  return lightsOn;
};
