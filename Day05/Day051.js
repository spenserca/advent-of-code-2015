const invalidSequences = ['ab', 'cd', 'pq', 'xy'];

module.exports = (input) => {
  const naughtyNiceList = input.split(',');
  let niceStrings = 0;

  naughtyNiceList.forEach(string => {
    let isNice = false;

    if (hasThreeVowels(string) && hasDoubleLetters(string) && !containsInvalidSequence(string)) {
      niceStrings++;
    }
  });

  return niceStrings;
}

const hasThreeVowels = (string) => {
  if (string.match(/[aeiou]/g)) {
    return string.match(/[aeiou]/g).length >= 3
  }
}

const hasDoubleLetters = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
}

const containsInvalidSequence = (string) => {
  if (string.match(/ab|cd|pq|xy/g)) {
    return string.match(/ab|cd|pq|xy/g).length > 0;
  }
}
