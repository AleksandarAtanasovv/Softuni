function counterStrike(arr) {
  let initialEnergy = Number(arr.shift());
  let wonBattles = 0;
  for (const energy of arr) {
    let energies = Number(energy);
    if (energy !== "End of battle") {
      if (initialEnergy - energies < 0) {
        console.log(
          `Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`
        );
        return;
      }
      initialEnergy -= energies;
      wonBattles++;
    } else {
      console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
    }
    if (wonBattles % 3 === 0) {
      initialEnergy += wonBattles;
    }
  }
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
