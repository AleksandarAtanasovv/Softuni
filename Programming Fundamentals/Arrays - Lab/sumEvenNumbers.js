function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  for (const key of arr) {
    if (key % 2 === 0) {
      sum += key;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
