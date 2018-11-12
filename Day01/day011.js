module.exports = (input) => {
  const floorsUp = input.match(/\(/g) || [];
  const floorsDown = input.match(/\)/g) || [];

  return floorsUp.length - floorsDown.length;
};
