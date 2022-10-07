function shoppingList(arr) {
  let initialList = arr.shift().split("!");
  let line = arr.shift();

  while (line !== "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");

    if (command === "Urgent") {
      if (initialList.includes(item) == false) {
        initialList.unshift(item);
      }
    }
    if (command === "Unnecessary") {
      if (initialList.includes(item) == true) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
      }
    }
    if (command === "Correct") {
      if (initialList.includes(item) == true) {
        let index = initialList.indexOf(item);
        initialList[index] = newItem;
      }
    }
    if (initialList.includes(item)) {
      if (command === "Rearrange") {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
        initialList.push(item);
      }
    }
    line = arr.shift();
  }
  console.log(initialList.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
