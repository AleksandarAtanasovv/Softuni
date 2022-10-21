function movingTarget(arr) {
  let initialSequence = arr.shift().split(" ").map(Number);
  let line = arr.shift();
  while (line !== "End") {
    let [command, index, value] = line.split(" ");
    index = Number(index);
    value = Number(value);
    switch (command) {
      case "Shoot":
        if (initialSequence[index]) {
          initialSequence[index] -= value;
        }
        if (initialSequence[index] <= 0) {
          initialSequence.splice(index, 1);
        }
        break;
      case "Add":
        if (initialSequence[index]) {
          initialSequence.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        const radius = value;
        const lowerIndex = index - radius;
        const upperIndex = index + radius;
        if (initialSequence[lowerIndex] && initialSequence[upperIndex]) {
          initialSequence.splice(index - value, value * 2 + 1);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
    line = arr.shift();
  }
  console.log(initialSequence.join("|"));
}
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
