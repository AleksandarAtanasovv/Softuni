function inventory(arr) {
  let resArr = [];
  arr.forEach((element) => {
    let [name, level, ...items] = element.split(" / ");
    const hero = {
      Hero: name,
      level: Number(level),
      items,
    };
    resArr.push(hero);
  });
  let sorted = resArr.sort((a, b) => a.level - b.level);
  sorted.forEach((el) => {
    for (const key in el) {
      if (key === "Hero") {
        console.log(`${key}: ${el[key]}`);
      } else {
        console.log(`${key} => ${el[key]}`);
      }
    }
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
