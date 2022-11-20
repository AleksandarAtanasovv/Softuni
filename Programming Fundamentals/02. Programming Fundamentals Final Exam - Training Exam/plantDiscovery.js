function plantDiscovery(arr) {
  let amountOfPlants = Number(arr.shift());
  let plants = {};
  for (let i = 0; i < amountOfPlants; i++) {
    let element = arr.shift();
    const [plant, rarity] = element.split("<->");
    plants[plant] = {
      plant,
      rarity: Number(rarity),
      rating: [],
    };
  }
  let line = arr.shift();
  while (line !== "Exhibition") {
    const [command, plant] = line.split(": ");
    const [plantName, ratingOrRarity] = plant.split(" - ");

    switch (command) {
      case "Rate":
        if (plants[plantName]) {
          plants[plantName]["rating"].push(Number(ratingOrRarity));
        } else {
          console.log("error");
        }
        break;
      case "Update":
        if (plants[plantName]) {
          plants[plantName].rarity = Number(ratingOrRarity);
        } else {
          console.log("error");
        }
        break;
      case "Reset":
        if (plants[plantName]) {
          plants[plantName].rating = [];
        } else {
          console.log("error");
        }
        break;
    }
    line = arr.shift();
  }
  console.log("Plants for the exhibition:");
  for (const key in plants) {
    if (plants[key].rating.length) {
      let avg = plants[key]["rating"].reduce((a, b) => a + b) / plants[key]["rating"].length;
      console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${avg.toFixed(2)}`);
    } else {
      console.log(`- ${key}; Rarity: ${plants[key]["rarity"]}; Rating: 0.00`);
    }
  }
}
plantDiscovery(["3", "Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10", "Rate: Welwitschia - 7", "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5", "Reset: Arnoldii", "Exhibition"]);
