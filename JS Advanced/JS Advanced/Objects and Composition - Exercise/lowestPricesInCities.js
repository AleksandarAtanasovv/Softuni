function lowestPricesInCities(arr) {
  const products = [];
  const temp = {};
  arr.forEach((element) => {
    let [townName, productName, productPrice] = element.split(" | ");
    productPrice = Number(productPrice);
    if (temp.hasOwnProperty(productName)) {
      if (productPrice < temp[productName].productPrice) {
        temp[productName].productPrice = productPrice;
        temp[productName].townName = townName;
      }
    } else {
      const tempObj = {};
      tempObj.productPrice = productPrice;
      tempObj.townName = townName;
      temp[productName] = tempObj;
      products.push(temp);
    }
  });
  for (const key in products[0]) {
    console.log(`${key} -> ${products[0][key].productPrice} (${products[0][key].townName})`);
  }
}
lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
