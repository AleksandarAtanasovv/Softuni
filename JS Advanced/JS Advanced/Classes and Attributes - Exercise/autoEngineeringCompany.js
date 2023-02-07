function autoEngineeringCompany(carsArr) {
  const brands = {};

  carsArr.forEach((car) => {
    let [brand, model, producedCars] = car.split(" | ");
    producedCars = Number(producedCars);
    if (!brands.hasOwnProperty(brand)) {
      brands[brand] = {};
      brands[brand][model] = producedCars;
    } else {
      if (!brands[brand].hasOwnProperty(model)) {
        brands[brand][model] = producedCars;
      } else {
        brands[brand][model] += producedCars;
      }
    }
  });
  for (const key in brands) {
    console.log(key);
    for (const [model, qty] of Object.entries(brands[key])) {
      console.log(`###${model} -> ${qty}`);
    }
  }
}
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
