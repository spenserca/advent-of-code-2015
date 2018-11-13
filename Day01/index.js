const fs = require('fs');
const day011 = require('./day011');
const day012 = require('./day012');

// eslint-disable-next-line no-sync
const input = fs.readFileSync('./Day01/input.txt', 'utf8');

const dayOneSolutions = () => `Day011: ${day011(input)}. Day012: ${day012(input)}.`;

console.log(dayOneSolutions());

module.exports = dayOneSolutions;
