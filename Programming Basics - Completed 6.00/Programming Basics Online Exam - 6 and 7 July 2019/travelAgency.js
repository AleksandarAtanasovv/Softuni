function travelAgency(input) {
  let cityName = input[0];
  let typeOfEquipment = input[1];
  let vip = input[2];
  let days = input[3];
  let total = 0;
  if (cityName === "Bansko" || cityName === "Borovets") {
    if (typeOfEquipment === "noEquipment") {
      total = 80 * days;
      if (days > 7) {
        total -= 80;
      }
      if (vip === "yes") {
        total *= 0.95;
      }
    } else if (typeOfEquipment === "withEquipment") {
      total = 100 * days;
      if (days > 7) {
        total -= 100;
      }
      if (vip === "yes") {
        total *= 0.9;
      }
    }
  }
  if (cityName === "Burgas" || cityName === "Varna") {
    if (typeOfEquipment === "withBreakfast") {
      total = 130 * days;
      if (days > 7) {
        total -= 130;
      }
      if (vip === "yes") {
        total *= 0.88;
      }
    } else if (typeOfEquipment === "noBreakfast") {
      total = 100 * days;
      if (days > 7) {
        total -= 100;
      }
      if (vip === "yes") {
        total *= 0.93;
      }
    }
  }

  if (
    cityName !== "Bansko" &&
    cityName !== "Borovets" &&
    cityName !== "Burgas" &&
    cityName !== "Varna"
  ) {
    console.log("Invalid input!");
  } else {
    if (
      typeOfEquipment !== "noEquipment" &&
      typeOfEquipment !== "withEquipment" &&
      typeOfEquipment !== "noBreakfast" &&
      typeOfEquipment !== "withBreakfast"
    ) {
      console.log("Invalid input!");
    } else {
      if (days >= 1) {
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
      } else {
        console.log("Days must be positive number!");
      }
    }
  }
}
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
