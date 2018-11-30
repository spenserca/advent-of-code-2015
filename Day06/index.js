const fs = require('fs');
const day061 = require('./day061');
const day062 = require('./day062');

const input = fs.readFileSync('./Day06/input.txt', 'utf8');

const output = () => `Day061: ${day061(input)}. Day062: ${day062(input)}.`;

console.log(output());

module.exports = output;
