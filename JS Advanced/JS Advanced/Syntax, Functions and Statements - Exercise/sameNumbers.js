function sameNumbers(num) {
  const numToStr = num.toString();
  const isSame = numToStr.split("").filter((x) => x !== numToStr[0]).length ? false : true;
  const totalSum = numToStr
    .split("")
    .map((x) => Number(x))
    .reduce((acc, value) => acc + value);

  console.log(isSame);
  console.log(totalSum);
}
sameNumbers(2222222);
