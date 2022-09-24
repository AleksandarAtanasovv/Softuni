function digitsWithWords(number) {
  let allNums = 0;
  switch (number) {
    case "zero":
      allNums += 0;
      break;
    case "one":
      allNums += 1;
      break;
    case "two":
      allNums += 2;
      break;
    case "three":
      allNums += 3;
      break;
    case "four":
      allNums += 4;
      break;
    case "five":
      allNums += 5;
      break;
    case "six":
      allNums += 6;
      break;
    case "seven":
      allNums += 7;
      break;
    case "eight":
      allNums += 8;
      break;
    case "nine":
      allNums += 9;
      break;
    case "ten":
      allNums += 10;
      break;
  }
  console.log(allNums);
}
digitsWithWords("nine");
