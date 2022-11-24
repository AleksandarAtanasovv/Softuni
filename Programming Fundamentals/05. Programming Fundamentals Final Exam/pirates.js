function pirates(arr) {
  const cities = {};
  let line = arr.shift();
  while (line !== "Sail") {
    const [city, people, gold] = line.split("||");
    if (!cities.hasOwnProperty(city)) {
      cities[city] = {
        people: Number(people),
        gold: Number(gold),
      };
    } else {
      cities[city].gold += Number(gold);
      cities[city].people += Number(people);
    }
    line = arr.shift();
  }
  let secondInput = arr.shift();
  while (secondInput !== "End") {
    const [command, city, peopleOrGold, gold] = secondInput.split("=>");
    switch (command) {
      case "Plunder":
        cities[city].people -= Number(peopleOrGold);
        cities[city].gold -= Number(gold);
        console.log(`${city} plundered! ${gold} gold stolen, ${peopleOrGold} citizens killed.`);
        if (cities[city].people <= 0 || cities[city].gold <= 0) {
          console.log(`${city} has been wiped off the map!`);
          delete cities[city];
        }
        break;
      case "Prosper":
        if (peopleOrGold >= 0) {
          cities[city].gold += Number(peopleOrGold);
          console.log(`${peopleOrGold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
        } else {
          console.log("Gold added cannot be a negative number!");
        }
        break;
    }
    secondInput = arr.shift();
  }
  if (Object.entries(cities).length > 0) {
    console.log(`Ahoy, Captain! There are ${Object.entries(cities).length} wealthy settlements to go to:`);
    for (const key in cities) {
      console.log(`${key} -> Population: ${cities[key].people} citizens, Gold: ${cities[key].gold} kg`);
    }
  } else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }
}
pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);
