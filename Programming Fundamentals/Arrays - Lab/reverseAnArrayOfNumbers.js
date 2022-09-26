function reverseAnArrayOfNumbers(n, arr) {
  let reversedArray = [];
  let str = "";
  for (let i = 0; i < n; i++) {
    reversedArray.push(arr[i]);
  }
  for (let j = reversedArray.length - 1; j >= 0; j--) {
    str += `${arr[j]} `;
  }
  console.log(str);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
