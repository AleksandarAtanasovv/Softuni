function heroicInventory(arr) {
  return JSON.stringify(
    arr.reduce((acc, val) => {
      const [name, level, items] = val.split(" / ");
      const parsedItems = items ? items.split(", ") : [];
      acc.push({
        name: name,
        level: Number(level),
        items: parsedItems,
      });
      return acc;
    }, [])
  );
}
console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
