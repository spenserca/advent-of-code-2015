module.exports = (input) => {
  const naughtyNiceList = input.split(',');
  let niceStrings = 0;

  naughtyNiceList.forEach(string => {
    if (hasPalindrome(string) && hasMatchingPair(string)) {
      niceStrings++;
    }
  });

  return niceStrings;
}

const hasPalindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i + 1]) {
      return true;
    }
  }
  return false;
}

const hasMatchingPair = (string) => {
  while (string.length > 2) {
    let pairToMatch = string.substring(0, 2);
    let stringToCompareTo = string.substring(2);
    string = string.substring(1);

    if (stringToCompareTo.includes(pairToMatch)) {
      return true;
    }
  }
  return false;
}
