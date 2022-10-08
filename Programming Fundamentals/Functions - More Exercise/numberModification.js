function numberModification(number) {
  let numberAsString = String(number);
  let sum = 0;
  const append = (n) => (numberAsString += n);

  while (sum / numberAsString.length <= 5) {
    for (let i = 0; i < numberAsString.length; i++) {
      let n = Number(numberAsString[i]);
      sum += n;
    }
    if (sum / numberAsString.length <= 5) {
      append(9);
      sum = 0;
    }
  }
  console.log(numberAsString);
}
numberModification(101);
