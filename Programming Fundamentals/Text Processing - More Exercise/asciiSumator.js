function asciiSumator([char1, char2, string]) {
  const rangeStart = Math.min(char1.charCodeAt(), char2.charCodeAt());
  const rangeEnd = Math.max(char1.charCodeAt(), char2.charCodeAt());
  let result = 0;
  for (const el of string) {
    if (el.charCodeAt() > rangeStart && el.charCodeAt() < rangeEnd) {
      result += el.charCodeAt();
    }
  }
  console.log(result);
}
asciiSumator(['?',
'E',
'@ABCEF']
);
