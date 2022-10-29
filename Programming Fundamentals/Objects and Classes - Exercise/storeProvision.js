function storeProvision(stock, order) {
  let storedProducts = {};
  for (let i = 0; i < stock.length; i += 2) {
    let currentProductName = stock[i];
    let currentProductAmount = Number(stock[i + 1]);
    storedProducts[currentProductName] = currentProductAmount;
  }

  for (let i = 0; i < order.length; i += 2) {
    let currentProductName = order[i];
    let currentProductAmount = Number(order[i + 1]);
    if (!storedProducts.hasOwnProperty(currentProductName)) {
      storedProducts[currentProductName] = 0;
    }
    storedProducts[currentProductName] += currentProductAmount;
  }
  for (const key in storedProducts) {
    console.log(`${key} -> ${storedProducts[key]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
