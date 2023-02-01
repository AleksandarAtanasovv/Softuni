function subSum(arr, start, end) {
  if (typeof arr !== "object") {
    return NaN;
  }
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length) {
    end = arr.length - 1;
  }
  try {
    return (
      (arr
        .slice(start, end + 1)
        .map(Number)
        .reduce((acc, val) => acc + val, 0) *
        10) /
      10
    );
  } catch (e) {
    return NaN;
  }
}
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
