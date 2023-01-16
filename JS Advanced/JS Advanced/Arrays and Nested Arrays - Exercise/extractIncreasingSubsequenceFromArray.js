function extractIncreasingSubsequenceFromArray(arr) {
  let currentBiggest = arr.shift();
  return arr.reduce((acc, val) => {
    if (val >= currentBiggest) {
      acc.push(val);
      currentBiggest = val;
    }
    return acc;
  }, [currentBiggest]);
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
