function printNthElement(arr) {
  let step = Number(arr.pop());
  let resultArr = [];
  for (let i = 0; i < arr.length; i += step) {
    resultArr.push(arr[i]);
  }
  console.log(resultArr.join(" "));
}
printNthElement(["dsa", "asd", "test", "test", "2"]);
