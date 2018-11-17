const hasThreeVowels = (string) => {
  let matches;

  if (string.match(/[aeiou]/g)) {
    matches = string.match(/[aeiou]/g);
  }

  return matches && matches.length >= 3;
};

const hasDoubleLetters = (string) => {
  let doubleLetters = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      doubleLetters = true;
    }
  }

  return doubleLetters;
};

const containsInvalidSequence = (string) => {
  let matches;

  if (string.match(/ab|cd|pq|xy/g)) {
    matches = string.match(/ab|cd|pq|xy/g);
  }

  return matches && matches.length > 0;
};

module.exports = (input) => {
  const naughtyNiceList = input.split(',');
  let niceStrings = 0;

  naughtyNiceList.forEach((string) => {
    if (hasThreeVowels(string) && hasDoubleLetters(string) && !containsInvalidSequence(string)) {
      niceStrings++;
    }
  });

  return niceStrings;
};
