class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(products) {
    let actions = [];
    for (let product of products) {
      let [name, quantity, totalPrice] = product.split(" ");
      quantity = Number(quantity);
      totalPrice = Number(totalPrice);
      if (totalPrice <= this.budgetMoney) {
        if (this.stockProducts.hasOwnProperty(name)) {
          this.stockProducts[name] += quantity;
        } else {
          this.stockProducts[name] = quantity;
        }
        this.budgetMoney -= totalPrice;
        actions.push(`Successfully loaded ${quantity} ${name}`);
      } else {
        actions.push(`There was not enough money to load ${quantity} ${name}`);
      }
    }
    this.history.push(...actions);
    return actions.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: neededProducts,
        price,
      };
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
    if (Object.keys(this.menu).length === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else {
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    }
  }
  showTheMenu() {
    const items = Object.entries(this.menu);
    if (items.length <= 0) {
      return "Our menu is not ready yet, please come later...";
    }
    const resultArr = [];
    for (const key in this.menu) {
      resultArr.push(`${key} - $ ${this.menu[key].price}`);
    }
    return resultArr.join("\n");
  }
  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    let areAllProductsAvailable = true;
    for (const el of this.menu[meal].products) {
      const [prodName, qty] = el.split(" ");

      if (
        !this.stockProducts.hasOwnProperty(prodName) ||
        this.stockProducts[prodName].productQuantity < qty
      ) {
        areAllProductsAvailable = false;
        break;
      }
    }
    if (areAllProductsAvailable) {
      for (let [name, quantity] of Object.entries(this.menu[meal].products)) {
        this.stockProducts[name] -= quantity;
      }
      this.budgetMoney += this.menu[meal].price;
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    } else {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(["Yogurt 50 3", "Honey 50 4", "Strawberries 20 10", "Banana 5 1"]);
kitchen.addToMenu("frozenYogurt", ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"], 9.99);
console.log(kitchen.makeTheOrder("frozenYogurt"));
