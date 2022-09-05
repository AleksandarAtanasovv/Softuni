function poolDay(input) {
  let amountOfPeople = input[0];
  let tax = input[1];
  let sunbed = input[2];
  let umbrella = input[3];

  let totalTax = amountOfPeople * tax;
  let amountOfUmbrellas = Math.ceil(amountOfPeople / 2);
  let umbrellaPrice = amountOfUmbrellas * umbrella;
  let totalSunBed = Math.ceil(amountOfPeople * 0.75) * sunbed;
  let total = totalTax + umbrellaPrice + totalSunBed;
  console.log(`${total.toFixed(2)} lv.`);
}
poolDay(["50", "6", "8", "4"]);
