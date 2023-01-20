function storeCatalogue(arr) {
  const res = {};
  arr.sort((a, b) => a.localeCompare(b));
  arr.forEach((element) => {
    const [productName, productPrice] = element.split(" : ");
    let firstLetter = productName[0];

    if (!res.hasOwnProperty(firstLetter)) {
      res[firstLetter] = [productName, productPrice];
    } else {
      res[firstLetter].push(productName, productPrice);
    }
  });
  for (const key in res) {
    console.log(`${key}`);
    for (let i = 0; i < res[key].length; i += 2) {
      let prodName = res[key][i];
      let prodPrice = res[key][i + 1];
      console.log(`  ${prodName}: ${prodPrice}`);
    }
  }
}
console.log(
  storeCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
