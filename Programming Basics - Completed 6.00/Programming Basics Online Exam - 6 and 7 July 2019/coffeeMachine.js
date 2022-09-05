function coffeeMachine(input) {
  let drink = input[0];
  let type = input[1];
  let amountOfDrinks = Number(input[2]);
  let total = 0;
  if (drink === "Espresso" && type === "Without") {
    total = amountOfDrinks * 0.9;
    if (amountOfDrinks >= 5) {
      total = total * 0.75;
    }
    total = total * 0.65;
  } else if (drink === "Espresso" && type === "Normal") {
    total = amountOfDrinks * 1;
    if (amountOfDrinks >= 5) {
      total = total * 0.75;
    }
  } else if (drink === "Espresso" && type === "Extra") {
    total = amountOfDrinks * 1.2;
    if (amountOfDrinks >= 5) {
      total = total * 0.75;
    }
  } else if (drink === "Cappuccino" && type === "Without") {
    total = amountOfDrinks * 1;
    total = total * 0.65;
  } else if (drink === "Cappuccino" && type === "Normal") {
    total = amountOfDrinks * 1.2;
  } else if (drink === "Cappuccino" && type === "Extra") {
    total = amountOfDrinks * 1.6;
  } else if (drink === "Tea" && type === "Without") {
    total = amountOfDrinks * 0.5;
    total = total * 0.65;
  } else if (drink === "Tea" && type === "Normal") {
    total = amountOfDrinks * 0.6;
  } else if (drink === "Tea" && type === "Extra") {
    total = amountOfDrinks * 0.7;
  }
  if (total > 15) {
    total *= 0.8;
  }
  console.log(
    `You bought ${amountOfDrinks} cups of ${drink} for ${total.toFixed(2)} lv.`
  );
}
coffeeMachine(["Cappuccino", "Normal", "13"]);
