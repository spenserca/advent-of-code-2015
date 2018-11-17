const hasPalindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i + 1]) {
      return true;
    }
  }

  return false;
};

const hasMatchingPair = (string) => {
  let toEvaluate = string;

  while (toEvaluate.length > 2) {
    const pairToMatch = toEvaluate.substring(0, 2);
    const stringToCompareTo = toEvaluate.substring(2);

    toEvaluate = toEvaluate.substring(1);

    if (stringToCompareTo.includes(pairToMatch)) {
      return true;
    }
  }

  return false;
};

module.exports = (input) => {
  const naughtyNiceList = input.split(',');
  let niceStrings = 0;

  naughtyNiceList.forEach((string) => {
    if (hasPalindrome(string) && hasMatchingPair(string)) {
      niceStrings++;
    }
  });

  return niceStrings;
};
