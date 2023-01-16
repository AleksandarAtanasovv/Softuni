function printEveryNthElementFromAnArray(arr, step) {
  return arr.filter((_, i) => i % step === 0);
}
console.log(printEveryNthElementFromAnArray(["5", "20", "31", "4", "20"], 2));
