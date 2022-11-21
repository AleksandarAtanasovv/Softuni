function needForSpeedIII(input) {
  const cars = {};
  const amountOfCars = Number(input.shift());
  for (let i = 0; i < amountOfCars; i++) {
    let element = input.shift();
    const [car, mileage, fuel] = element.split("|");
    cars[car] = {
      mileage: Number(mileage),
      fuel: fuel,
    };
  }
  let line = input.shift();
  while (line !== "Stop") {
    let [command, car, distance, fuel] = line.split(" : ");
    switch (command) {
      case "Drive":
        if (Number(cars[car].fuel) >= Number(fuel)) {
          cars[car].fuel -= Number(fuel);
          cars[car].mileage += Number(distance);
          console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
          if (cars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }

        break;
      case "Refuel":
        if (cars[car].fuel + Number(distance) >= 75) {
          console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
          cars[car].fuel = 75;
        } else {
          cars[car].fuel += Number(distance);
          console.log(`${car} refueled with ${Number(distance)} liters`);
        }
        break;
      case "Revert":
        if (cars[car].mileage - Number(distance) < 10000) {
          cars[car].mileage = 10000;
        } else {
          cars[car].mileage -= Number(distance);
          console.log(`${car} mileage decreased by ${distance} kilometers`);
        }

        break;
    }
    line = input.shift();
  }

  for (const key in cars) {
    console.log(`${key} -> Mileage: ${cars[key].mileage} kms, Fuel in the tank: ${cars[key].fuel} lt.`);
  }
}
needForSpeedIII([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
