function storage(arr) {
  const map = new Map();
  for (const line of arr) {
    let [product, amount] = line.split(" ");
    amount = Number(amount);

    if (!map.has(product)) {
      map.set(product, amount);
    } else {
      map.set(product, (amount += map.get(product)));
    }
  }
  map.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
  });
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
