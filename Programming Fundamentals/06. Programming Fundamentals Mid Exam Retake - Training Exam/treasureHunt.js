function treasureHunt(arr) {
  let initialLoot = arr.shift().split("|");
  let line = arr.shift();
  while (line !== "Yohoho!") {
    let [command, ...elements] = line.split(" ");
    if (command === "Loot") {
      for (const item of elements) {
        if (!initialLoot.includes(item)) {
          initialLoot.unshift(item);
        }
      }
    }
    if (command === "Drop") {
      if (elements[0] >= 0 && elements[0] < initialLoot.length) {
        initialLoot.push(initialLoot.splice(elements[0], 1));
      }
    }
    if (command === "Steal") {
      let count = Math.min(initialLoot.length, Number(elements.shift()));
      let index = initialLoot.length - count;
      if (count > initialLoot.length) {
        count = initialLoot.length;
      }
      let stolenItems = initialLoot.splice(index, count);
      console.log(stolenItems.join(", "));
    }
    line = arr.shift();
  }

  if (initialLoot.length <= 0) {
    console.log("Failed treasure hunt.");
  } else {
    let averageTreasureGain =
      initialLoot.reduce((prevSum, item) => prevSum + item.length, 0) /
      initialLoot.length;
    console.log(
      `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`
    );
  }
}
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
