function inventory(arr) {
  let items = arr.shift().split(", ");

  let line = arr.shift();
  while (line !== "Craft!") {
    let [command, item] = line.split(" - ");
    if (command === "Collect") {
      if (items.includes(item) === false) {
        items.push(item);
      }
    }
    if (command === "Drop") {
      if (items.includes(item)) {
        let indexOfItem = items.indexOf(item);
        items.splice(indexOfItem, 1);
      }
    }
    if (command === "Combine Items") {
      let newItem = item.split(":");
      let index = items.indexOf(newItem[0]);
      if (index >= 0) {
        items.splice(index + 1, 0, newItem[1]);
      }
    }
    if (command === "Renew") {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        items.push(item);
      }
    }
    line = arr.shift();
  }
  console.log(items.join(", "));
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
