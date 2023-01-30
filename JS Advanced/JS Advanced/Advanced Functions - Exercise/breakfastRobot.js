function solution() {
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  const storage = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  };
  return function (str) {
    let [command, action, qty] = str.split(" ");
    qty = Number(qty);
    switch (command) {
      case "restock":
        storage[action] += qty;
        return "Success";
      case "prepare":
        const recipe = recipes[action];
        for (const key in recipe) {
          if (recipe[key] * qty > storage[key]) {
            return `Error: not enough ${key} in stock`;
          }
        }
        for (const key in recipe) {
          storage[key] -= recipe[key] * qty;
        }
        return "Success";
        break;
      case "report":
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }
  };
}
let manager = solution();
// (manager("restock flavour 50")); // Success
// (manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
