function nonDecreasingSubset(arr) {
  let currentBiggestEl = arr[0];
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= currentBiggestEl) {
      resArr.push(arr[i]);
      currentBiggestEl = arr[i];
    }
  }
  console.log(resArr.join(" "));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
