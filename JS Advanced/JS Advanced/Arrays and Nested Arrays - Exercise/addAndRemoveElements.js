function addAndRemoveElements(arr) {
  const resultArray = [];
  let number = 1;
  arr.forEach((el) => {
    if (el === "add") {
      resultArray.push(number++);
    } else {
      resultArray.pop(number++);
    }
  });
  return resultArray.length > 0 ? resultArray.join("\n") : "Empty";
}
console.log(addAndRemoveElements(["add", "add", "add", "add"]));
console.log(addAndRemoveElements(["remove", "remove", "remove"]));
