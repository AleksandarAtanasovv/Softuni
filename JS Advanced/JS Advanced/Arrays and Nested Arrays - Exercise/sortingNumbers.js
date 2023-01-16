function sortingNumbers(arr) {
  const resArr = [];
  arr.sort((a, b) => a - b);
  while (arr.length) {
    resArr.push(...arr.splice(arr.indexOf(Math.min(...arr)), 1));
    resArr.push(...arr.splice(arr.indexOf(Math.max(...arr)), 1));
  }
  return resArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
