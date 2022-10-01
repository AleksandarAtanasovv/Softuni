function addAndRemove(arr) {
  let resultArr = [];

  let currentNum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentNum++;
    if (arr[i] === "add") {
      resultArr.push(currentNum);
    } else if (arr[i] === "remove") {
      resultArr.pop();
    }
  }

  if (arr.includes("add") !== true || resultArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(resultArr.join(" "));
  }
}
addAndRemove(["remove", "remove", "remove", "add", "remove"]);
