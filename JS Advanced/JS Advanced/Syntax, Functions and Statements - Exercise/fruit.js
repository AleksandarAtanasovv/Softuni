function fruit(fruit, grams, price) {
  return `I need $${((grams / 1000) * price).toFixed(2)} to buy ${(grams / 1000).toFixed(
    2
  )} kilograms ${fruit}.`;
}
console.log(fruit("orange", 2500, 1.8));
