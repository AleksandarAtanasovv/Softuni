function tseamAccount(arr) {
  let currentTseamAccount = arr.shift().split(" ");
  let line = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    while (line !== "Play!") {
      let [command, game] = line.split(" ");
      if (currentTseamAccount.includes(game) === false) {
        if (command === "Install") {
          currentTseamAccount.push(game);
        }
      }
      if (currentTseamAccount.includes(game)) {
        if (command === "Uninstall") {
          let gameIndex = currentTseamAccount.indexOf(game);
          currentTseamAccount.splice(gameIndex, 1);
        }
      }
      if (currentTseamAccount.includes(game)) {
        if (command === "Update") {
          let gameIndex = currentTseamAccount.indexOf(game);
          currentTseamAccount.splice(gameIndex, 1);
          currentTseamAccount.push(game);
        }
      }
      if (command === "Expansion") {
        let currentGame = game.split("-");
        if (currentTseamAccount.includes(currentGame[0])) {
          if (command === "Expansion") {
            let tempGame = currentTseamAccount.shift();
            currentTseamAccount.unshift(`${currentGame[0]}:${currentGame[1]}`);
            currentTseamAccount.unshift(tempGame);
          }
        }
      }
      line = arr.shift();
    }
  }
  console.log(currentTseamAccount.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
