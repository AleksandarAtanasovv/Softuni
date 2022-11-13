function deserializeString(arr) {
  let command = arr.shift();
  let resArr = [];
  let arrOfValues = [];
  while (command !== "end") {
    let [letter, ...indexes] = command.split(":");
    for (const el of indexes) {
      let [...index] = el.split("/");
      index.forEach((element) => {
        resArr[element] = letter;
      });
    }
    command = arr.shift();
  }
  let resultString = "";
  resArr.forEach((el) => {
    resultString += el;
  });
  console.log(resultString);
}
deserializeString(["a:0/3/5/11", "v:1/4", "j:2", "m:6/9/15", "s:7/13", "d:8/14", "c:10", "l:12", "end"]);
