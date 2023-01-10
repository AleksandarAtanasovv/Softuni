function mathOperations(num1, num2, operator) {
  const calculator = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
    "%": num1 % num2,
    "**": num1 ** num2,
  };
  return calculator[operator];
}
console.log(mathOperations(3, 5.5, "*"));
