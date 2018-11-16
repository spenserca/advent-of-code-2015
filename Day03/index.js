const fs = require('fs');
const day031 = require('./day031');
const day032 = require('./day032');

// eslint-disable-next-line no-sync
const input = fs.readFileSync('./Day03/input.txt', 'utf8');

const solutionOutput = () => `Day031: ${day031(input)}. Day032: ${day032(input)}.`;

console.log(solutionOutput());

module.exports = solutionOutput;
