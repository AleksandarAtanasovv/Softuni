function travelTime(arr) {
  const townInfo = {};
  for (const el of arr) {
    let [country, townName, travelCost] = el.split(" > ");
    if (!townInfo.hasOwnProperty(country)) {
      townInfo[country] = {};
    }
    if (!townInfo.hasOwnProperty(townName)) {
      townInfo[country][townName] = travelCost;
    }
    let prevPrice = townInfo[country][townName];
    if (prevPrice > travelCost) {
      townInfo[country][townName] = travelCost;
    }
  }

  const sorted = Object.entries(townInfo).sort((a, b) => a[0].localeCompare(b[0]));
  for (const el of sorted) {
    const res = Object.entries(el[1])
      .sort((a, b) => a[1] - b[1])
      .join(" ");
    console.log(`${el[0]} -> ${res.split(",").join(" -> ")}`);
  }
}
travelTime(["Bulgaria > Sofia > 25000", "Bulgaria > Sofia > 25000", "Kalimdor > Orgrimar > 25000", "Albania > Tirana > 25000", "Bulgaria > Varna > 25010", "Bulgaria > Lukovit > 10"]);
