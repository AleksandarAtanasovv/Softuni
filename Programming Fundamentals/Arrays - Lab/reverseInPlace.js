function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let currentElement = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = currentElement;
  }
  let result = "";
  for (const el of arr) {
    result += `${el} `;
  }
  console.log(result);
}
reverseInPlace(["a", "b", "c", "d", "e"]);
