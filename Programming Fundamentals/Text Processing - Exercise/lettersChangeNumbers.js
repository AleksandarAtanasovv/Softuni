function lettersChangeNumbers(combinations) {
  const isLowerCase = (string) => /^[a-z]$/.test(string);
  const isUpperCase = (string) => /^[A-Z]$/.test(string);
  let sum = 0;
  let arrOfcombinations = combinations.split(" ");
  for (const letter of arrOfcombinations) {
    let result = 0;

    let firstChar = letter[0];
    let firstCharPosition = letter.toLowerCase().charCodeAt(0) - 96;

    let lastChar = letter[letter.length - 1];
    let lastCharPosition = letter.toLowerCase().charCodeAt(letter.length - 1) - 96;

    let number = Number(letter.substring(1, letter.length - 1));

    if (isUpperCase(firstChar)) {
      result = number / firstCharPosition;
      sum += result;
    }
    if (isLowerCase(firstChar)) {
      result = number * firstCharPosition;
      sum += result;
    }
    if (isUpperCase(lastChar)) {
      sum -= lastCharPosition;
    }
    if (isLowerCase(lastChar)) {
      sum += lastCharPosition;
    }
  }
  console.log(sum.toFixed(2));
}
lettersChangeNumbers("A12b s17G");
