function sumDigits(number) {
  let digits = number.toString();
  let total = 0;

  for (let i = 0; i < digits.length; i++) {
    total += Number(digits[i]);
  }
  console.log(total);
}
sumDigits(543);
