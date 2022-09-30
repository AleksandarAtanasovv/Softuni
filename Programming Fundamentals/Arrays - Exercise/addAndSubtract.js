function addAndSubtract(arr) {
  let resultArray = [];
  let originalArraySum = 0;
  let newArraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    originalArraySum += arr[i];
    if (arr[i] % 2 === 0) {
      resultArray.push((arr[i] += Number(i)));
    } else {
      resultArray.push((arr[i] -= Number(i)));
    }
    newArraySum += resultArray[i];
  }
  console.log(resultArray);
  console.log(originalArraySum);
  console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);
