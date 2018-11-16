const fs = require('fs');
const day021 = require('./day021');
const day022 = require('./day022');

// eslint-disable-next-line no-sync
const input = fs.readFileSync('./Day02/input.txt', 'utf8');

const solutionOutput = () => `Day021: ${day021(input)}. Day022: ${day022(input)}.`;

console.log(solutionOutput());

module.exports = solutionOutput;
