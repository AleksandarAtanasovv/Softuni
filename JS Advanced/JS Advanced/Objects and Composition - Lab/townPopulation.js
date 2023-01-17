function townPopulation(cities) {
  const result = {};
  cities.forEach((city) => {
    const [name, population] = city.split(" <-> ");
    if (!result.hasOwnProperty(name)) {
      result[name] = Number(population);
    } else {
      result[name] += Number(population);
    }
  });
  return Object.entries(result)
    .map((x) => x.join(" : "))
    .join("\n");
}
console.log(
  townPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
  ])
);
