function magicSum(arr, numToMatch) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) + Number(arr[j]) === numToMatch) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
