function replaceRepeatingChars(stringOfChars) {
  let result = stringOfChars[0];
  for (let i = 1; i < stringOfChars.length; i++) {
    if (stringOfChars[i] !== stringOfChars[i - 1]) {
      result += stringOfChars[i];
    }
  }
  console.log(result);
}
replaceRepeatingChars("qqqwerqwecccwd");
