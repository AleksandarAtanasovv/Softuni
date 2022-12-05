function degustationParty(input) {
  let disliked = 0;
  const meals = {};
  let line = input.shift();
  while (line !== "Stop") {
    const [command, guest, meal] = line.split("-");
    switch (command) {
      case "Like":
        if (!meals.hasOwnProperty(guest)) {
          meals[guest] = {
            meal: [meal],
          };
        } else {
          if (!meals[guest].meal.includes(meal)) {
            meals[guest]["meal"].push(meal);
          }
        }
        break;
      case "Dislike":
        if (meals.hasOwnProperty(guest)) {
          if (meals[guest]["meal"].includes(meal)) {
            let index = meals[guest]["meal"].indexOf(meal);
            meals[guest]["meal"].splice(index, 1);
            disliked++;
            console.log(`${guest} doesn't like the ${meal}.`);
          } else {
            console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
          }
        } else {
          console.log(`${guest} is not at the party.`);
        }
        break;
    }
    line = input.shift();
  }
  for (const key in meals) {
    console.log(`${key}: ${meals[key]["meal"].join(", ")}`);
  }
  console.log(`Unliked meals: ${disliked}`);
}
degustationParty([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);
