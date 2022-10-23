function spaceTravel(arr) {
  let line = arr.shift().split("||");
  let totalFuel = Number(arr.shift());
  let totaAmmo = Number(arr.shift());
  while (line.includes("Titan")) {
    let [command, yearsOrArmour] = line.shift().split(" ");
    yearsOrArmour = Number(yearsOrArmour);
    if (command === "Titan") {
      break;
    }
    switch (command) {
      case "Travel":
        totalFuel -= yearsOrArmour;
        if (totalFuel >= 0) {
          console.log(`The spaceship travelled ${yearsOrArmour} light-years.`);
        } else {
          console.log(`Mission failed.`);
          return;
        }
        break;
      case "Enemy":
        if (yearsOrArmour <= totaAmmo) {
          totaAmmo -= yearsOrArmour;
          console.log(`An enemy with ${yearsOrArmour} armour is defeated.`);
        } else if (yearsOrArmour >= totaAmmo) {
          for (let i = 1; i <= yearsOrArmour; i++) {
            totalFuel -= 2;
          }
          if (totalFuel >= 0) {
            console.log(
              `An enemy with ${yearsOrArmour} armour is outmaneuvered.`
            );
          } else {
            console.log("Mission failed.");
            return;
          }
        }
        break;
      case "Repair":
        totaAmmo += yearsOrArmour * 2;
        totalFuel += yearsOrArmour;
        console.log(`Ammunitions added: ${yearsOrArmour * 2}.`);
        console.log(`Fuel added: ${yearsOrArmour}.`);
        break;
    }
  }
  console.log("You have reached Titan, all passengers are safe.");
}
spaceTravel([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
