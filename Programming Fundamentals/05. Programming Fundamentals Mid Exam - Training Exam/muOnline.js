function muOnline(str) {
  let rooms = str.split("|");
  let health = 100;
  let bitcoins = 0;
  let roomCount = 0;
  for (const room of rooms) {
    roomCount++;
    let [command, value] = room.split(" ");
    if (command === "potion" && health < 100) {
      value = Number(value);
      if (health > 100) {
        health = 100;
      }
      if (health + value > 100) {
        value = 100 - health;
      }
      health += value;
      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoins += Number(value);
      console.log(`You found ${value} bitcoins.`);
    } else {
      health -= Number(value);
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomCount}`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
