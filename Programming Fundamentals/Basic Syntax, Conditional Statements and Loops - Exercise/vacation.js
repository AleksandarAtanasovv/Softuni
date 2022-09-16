function vacation(groupOfPeople, typeOfGroup, dayOfTheWeak) {
  let totalPrice = 0;
  if (dayOfTheWeak === "Friday") {
    if (typeOfGroup === "Students") {
      totalPrice = 8.45 * groupOfPeople;
      if (groupOfPeople >= 30) {
        totalPrice *= 0.85;
      }
    } else if (typeOfGroup === "Business") {
      if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
      }
      totalPrice = 10.9 * groupOfPeople;
    } else if (typeOfGroup === "Regular") {
      totalPrice = 15 * groupOfPeople;
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95;
      }
    }
  } else if (dayOfTheWeak === "Saturday") {
    if (typeOfGroup === "Students") {
      totalPrice = 9.8 * groupOfPeople;
      if (groupOfPeople >= 30) {
        totalPrice *= 0.85;
      }
    } else if (typeOfGroup === "Business") {
      if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
      }
      totalPrice = 15.6 * groupOfPeople;
    } else if (typeOfGroup === "Regular") {
      totalPrice = 20 * groupOfPeople;
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95;
      }
    }
  } else if (dayOfTheWeak === "Sunday") {
    if (typeOfGroup === "Students") {
      totalPrice = 10.46 * groupOfPeople;
      if (groupOfPeople >= 30) {
        totalPrice *= 0.85;
      }
    } else if (typeOfGroup === "Business") {
      if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
      }
      totalPrice = 16 * groupOfPeople;
    } else if (typeOfGroup === "Regular") {
      totalPrice = 22.5 * groupOfPeople;
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95;
      }
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
