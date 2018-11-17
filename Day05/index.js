const fs = require('fs');
const day051 = require('./day051');
const day052 = require('./day052');

const input = fs.readFileSync('./Day05/input.txt', 'utf8');

const output = () => `Day051: ${day051(input)}. Day052: ${day052(input)}.`;

console.log(output());

module.exports = output;
