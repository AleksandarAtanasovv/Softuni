function burgerBus(arr) {
  let numberOfCities = Number(arr.shift());
  let total = 0;
  for (let i = 1; i <= numberOfCities; i++) {
    let currentCityProfit = 0;
    let nameOfCity = arr.shift();
    let earns = Number(arr.shift());
    let expenses = Number(arr.shift());
    if (i % 3 === 0 && i % 5 !== 0) {
      expenses += expenses / 2;
    }
    if (i % 5 === 0) {
      earns *= 0.9;
    }
    currentCityProfit = earns - expenses;
    total += currentCityProfit;
    console.log(
      `In ${nameOfCity} Burger Bus earned ${currentCityProfit.toFixed(2)} leva.`
    );
  }
  console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);
}
burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
