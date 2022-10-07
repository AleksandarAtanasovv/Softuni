function arrModifier(arr) {
  let decreasedArr = [];
  let array = arr[0].split(" ").map(Number);
  let index = 1;
  let operation = arr[index].split(" ");
  while (operation[0] !== "end") {
    operation = arr[index].split(" ");
    index++;
    if (operation[0] == "swap") {
      let temp = array[operation[1]];
      array[operation[1]] = array[operation[2]];
      array[operation[2]] = temp;
    } else if (operation[0] == "multiply") {
      array[operation[1]] *= array[operation[2]];
    } else if (operation[0] == "decrease") {
      for (let j = 0; j < array.length; j++) {
        array[j] -= 1;
      }
    }
  }
  if (decreasedArr.length === 0 || decreasedArr == undefined) {
    console.log(array.join(", "));
  } else {
    console.log(decreasedArr.join(", "));
  }
}

arrModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
