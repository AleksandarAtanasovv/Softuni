function familyTrip(input) {
  let budget = Number(input[0]);
  let amountOfNights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let amountOfAdditionalExpenses = Number(input[3]);

  let totalPrice = amountOfNights * pricePerNight;
  if (amountOfNights > 7) {
    totalPrice *= 0.95;
  }
  let additionalExpenses = (budget * amountOfAdditionalExpenses) / 100;
  totalPrice += additionalExpenses;
  let diff = Math.abs(totalPrice - budget);
  if (budget >= totalPrice) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip(["500", "7", "66", "15"]);
