function numbers(nums) {
  let arrayOfNums = nums.split(" ").map(Number);
  let averageInArray = findAverage(arrayOfNums);
  let resultArray = [];
  for (let i = 0; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > averageInArray) {
      resultArray.push(arrayOfNums[i]);
    }
  }
  if (resultArray.length > 5) {
    let sortedInDescOrder = resultArray.sort((a, b) => b - a);
    let splicedArray = sortedInDescOrder.splice(0, 5);
    console.log(splicedArray.join(" "));
  } else {
    let sortedInDescOrder = resultArray.sort((a, b) => b - a);
    console.log(sortedInDescOrder.join(" "));
  }
  if (resultArray.length == 0 || resultArray === undefined) {
    console.log("No");
  }

  function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
}
