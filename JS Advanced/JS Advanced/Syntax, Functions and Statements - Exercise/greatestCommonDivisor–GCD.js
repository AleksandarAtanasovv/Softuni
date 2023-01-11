function greatestCommonDivisorGCD(num1, num2) {
  if (num2) {
    return greatestCommonDivisorGCD(num2, num1 % num2);
  } else {
    return Math.abs(num1);
  }
}
console.log(greatestCommonDivisorGCD(2154, 458));
