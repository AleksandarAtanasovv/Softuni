class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }
  get totalCost() {
    let total = 0;
    this.storage.forEach((element) => {
      total += Number(element.price) * element.quantity;
    });
    return total;
  }
  addProduct(products) {
    this.storage.push(products);
    this.capacity -= products.quantity;
  }
  getProducts() {
    let res = [];
    this.storage.forEach((item) => {
      res.push(JSON.stringify(item));
    });
    return res.join("\n");
  }
}
let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);
