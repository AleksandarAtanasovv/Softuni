function carFactory({ model, power, color, carriage, wheelsize }) {
  const engines = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 },
  };
  let engine = {};
  if (power <= 90) {
    engine = engines.smallEngine;
  } else if (power > 90 && power < 200) {
    engine = engines.normalEngine;
  } else {
    engine = engines.monsterEngine;
  }
  const calculatedWheelSize = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
  return {
    model,
    engine,
    carriage: { type: carriage, color: color },
    wheels: Array(4).fill(calculatedWheelSize),
  };
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({ model: "Opel Vectra", power: 110, color: "grey", carriage: "coupe", wheelsize: 17 })
);
