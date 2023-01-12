function negativePositiveNumbers(arr) {
  const resArr = [];
  arr.map(Number).forEach((element) => {
    if (element < 0) {
      resArr.unshift(element);
    } else {
      resArr.push(element);
    }
  });
  console.log(resArr.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
