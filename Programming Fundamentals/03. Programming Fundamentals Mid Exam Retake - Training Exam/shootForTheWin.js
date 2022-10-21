function shootForTheWin(arr) {
  let targets = arr.shift().split(" ").map(Number);
  let line = arr.shift();
  let count = 0;
  while (line !== "End") {
    let indexOfTheTarget = Number.parseInt(line);
    if (indexOfTheTarget >= 0 && indexOfTheTarget < targets.length) {
      for (let i = 0; i < targets.length; i++) {
        let currentTarget = targets[indexOfTheTarget];

        if (i !== indexOfTheTarget && targets[i] !== -1) {
          if (targets[i] > currentTarget) {
            targets[i] -= currentTarget;
          } else {
            targets[i] += currentTarget;
          }
        }
      }
      targets[indexOfTheTarget] = -1;
      count++;
    }
    line = arr.shift();
  }
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
