function manOWar(arr) {
  let pirateShipStatus = arr.shift().split(">").map(Number);
  let warShipStatus = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());
  let isPirateShipSunken = false;
  let isWarShipSunken = false;
  let line = arr.shift();
  while (line !== "Retire") {
    let [command, index, endIndex, damage] = line.split(" ");
    if (command === "Fire") {
      if (index >= 0 && index < warShipStatus.length) {
        warShipStatus[index] -= Number(endIndex);
        if (warShipStatus[index] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          isWarShipSunken = true;
          break;
        }
      }
    }
    if (command === "Defend") {
      if (
        index >= 0 &&
        endIndex >= 0 &&
        endIndex < pirateShipStatus.length &&
        index < pirateShipStatus.length
      ) {
        let isSunken = false;
        for (let i = index; i <= Number(endIndex); i++) {
          pirateShipStatus[i] -= Number(damage);

          if (pirateShipStatus[i] <= 0) {
            isSunken = true;
            break;
          }
        }
        if (isSunken) {
          console.log("You lost! The pirate ship has sunken.");
          isPirateShipSunken = true;
          break;
        }
      }
    }
    if (command === "Repair") {
      if (index >= 0 && index < pirateShipStatus.length) {
        pirateShipStatus[index] += Number(endIndex);
        if (pirateShipStatus[index] > maxHealth) {
          pirateShipStatus[index] = maxHealth;
        }
      }
    }
    if (command === "Status") {
      let amountOfCellsForRepair = 0;
      let twentyPercentOffMaxHealth = maxHealth * 0.2;
      for (const el of pirateShipStatus) {
        let element = Number(el);
        if (element < twentyPercentOffMaxHealth) {
          amountOfCellsForRepair++;
        }
      }
      console.log(`${amountOfCellsForRepair} sections need repair.`);
    }

    line = arr.shift();
  }
  if (isPirateShipSunken === false && isWarShipSunken === false) {
    let pirateShipSum = pirateShipStatus.reduce((acc, el) => acc + el, 0);
    let warShipSum = warShipStatus.reduce((acc, el) => acc + el, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
  }
}
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
