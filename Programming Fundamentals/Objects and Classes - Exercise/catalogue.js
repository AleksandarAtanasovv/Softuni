function catalogue(arr) {
  let cat = [];
  arr.forEach((element) => {
    let [name, price] = element.split(" : ");
    let catObj = {
      name,
      price: Number(price),
    };
    cat.push(catObj);
  });

  cat.sort((a, b) => a.name.localeCompare(b.name));

  let letter = "";
  for (const el of cat) {
    if (el.name[0].toUpperCase() === letter) {
      console.log(` ${el.name}: ${el.price}`);
    } else {
      letter = el.name[0].toUpperCase();
      console.log(letter);
      console.log(` ${el.name}: ${el.price}`);
    }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
