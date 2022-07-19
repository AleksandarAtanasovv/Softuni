function aluminumJoinery(input) {
  let amountOfWindows = Number(input[0]);
  let typeOfWindows = input[1];
  let withOrWithoutDelivery = input[2];
  let totalPrice = 0;

  switch (typeOfWindows) {
    case "90X130":
      totalPrice = amountOfWindows * 110;
      if (amountOfWindows > 30 && amountOfWindows < 60) {
        totalPrice -= (totalPrice * 5) / 100;
      } else if (amountOfWindows > 60) {
        totalPrice -= (totalPrice * 8) / 100;
      }
      break;
    case "100X150":
      totalPrice = amountOfWindows * 140;
      if (amountOfWindows > 40 && amountOfWindows < 80) {
        totalPrice -= (totalPrice * 6) / 100;
      } else if (amountOfWindows > 80) {
        totalPrice -= (totalPrice * 10) / 100;
      }
      break;
    case "130X180":
      totalPrice = amountOfWindows * 190;
      if (amountOfWindows > 20 && amountOfWindows < 50) {
        totalPrice -= (totalPrice * 7) / 100;
      } else if (amountOfWindows > 50) {
        totalPrice -= (totalPrice * 12) / 100;
      }
      break;
    case "200X300":
      totalPrice = amountOfWindows * 250;
      if (amountOfWindows > 25 && amountOfWindows < 50) {
        totalPrice -= (totalPrice * 9) / 100;
      } else if (amountOfWindows > 50) {
        totalPrice -= (totalPrice * 14) / 100;
      }
      break;
  }
  if (withOrWithoutDelivery === "With delivery") {
    totalPrice += 60;
  }
  if (amountOfWindows > 99) {
    totalPrice -= (totalPrice * 4) / 100;
  }

  if (amountOfWindows < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${totalPrice.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["105", "100X150", "With delivery"]);
