function primeNumberChecker(num) {
  let prime = num != 1;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  console.log(prime);
}
primeNumberChecker(8);
