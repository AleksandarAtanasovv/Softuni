function sumOfNumbersNM(n, m) {
  let result = 0;

  for (let i = Number(n); i <= Number(m); i++) {
    result += Number(i);
  }
  console.log(result);
}
sumOfNumbersNM("1", "5");
