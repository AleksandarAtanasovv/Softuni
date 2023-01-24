function solve() {
  const prods = Array.from(document.querySelectorAll(".product"));
  const textArea = document.querySelector("textarea");
  const products = {};
  prods.forEach((prod) => {
    prod.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const name = e.target.parentNode.parentNode.querySelector(".product-title").textContent;
        const money =
          e.target.parentNode.parentNode.querySelector(".product-line-price").textContent;
        textArea.textContent += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`;
        if (!products.hasOwnProperty(name)) {
          products[name] = Number(money);
        } else {
          products[name] += Number(money);
        }
      }
    });
  });
  const checkoutBtn = document.querySelector(".checkout");
  let total = 0;
  const boughtProducts = [];
  checkoutBtn.addEventListener("click", () => {
    for (const product in products) {
      total += Number(products[product]);
      boughtProducts.push(product);
    }
    textArea.textContent += `You bought ${boughtProducts.join(", ")} for ${total.toFixed(2)}.`;
    const allButtons = Array.from(document.querySelectorAll("button"));
    allButtons.forEach((button) => {
      button.disabled = true;
    });
  });
}
