class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, hp, price, mlg) {
    if (
      typeof model !== "string" ||
      model.length <= 0 ||
      Number.isInteger(hp) === false ||
      hp < 0 ||
      price < 0 ||
      mlg < 0
    ) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({
      model,
      horsepower: hp,
      price,
      mileage: mlg,
    });
    return `New car added: ${model} - ${hp} HP - ${mlg.toFixed(2)} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    const foundCarIndex = this.availableCars.findIndex((c) => c.model === model);
    const foundCar = this.availableCars[foundCarIndex];
    if (!foundCar) {
      throw new Error(`${model} was not found!`);
    }
    const diff = Number(foundCar.mileage) - Number(desiredMileage);
    if (foundCar.mileage <= desiredMileage) {
    } else if (diff <= 40000) {
      foundCar.price *= 0.95;
    } else if (diff > 40000) {
      foundCar.price *= 0.9;
    }
    const newCar = {
      model: foundCar.model,
      horsepower: foundCar.horsepower,
      soldPrice: foundCar.price,
    };
    this.availableCars.splice(foundCarIndex, 1);
    this.soldCars.push(newCar);
    this.totalIncome += foundCar.price;
    return `${model} was sold for ${foundCar.price.toFixed(2)}$`;
  }
  currentCar() {
    const res = [];
    if (this.availableCars.length > 0) {
      res.push("-Available cars:");
      this.availableCars.forEach((car) => {
        res.push(
          `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
            2
          )} km - ${car.price.toFixed(2)}$`
        );
      });
      return res.join("\n");
    } else {
      return "There are no available cars";
    }
  }
  salesReport(criteria) {
    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error("Invalid criteria!");
    }
    const res = [];
    res.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
    res.push(`-${this.soldCars.length} cars sold:`);
    this.soldCars.forEach((soldCar) => {
      res.push(`---${soldCar.model} - ${soldCar.horsepower} HP - ${soldCar.soldPrice.toFixed(2)}$`);
    });
    return res.join("\n");
  }
}
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("asd"));
