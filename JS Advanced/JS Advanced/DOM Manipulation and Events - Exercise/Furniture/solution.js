function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  const table = document.querySelector("tbody");
  const [textArea, resultText] = document.querySelectorAll("textarea");
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate() {
    const input = JSON.parse(textArea.value);
    input.forEach((el) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const img = document.createElement("img");
      img.src = el.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      const td2 = document.createElement("td");
      const name = document.createElement("name");
      name.textContent = el.name;
      td2.appendChild(name);
      tr.appendChild(td2);

      const td3 = document.createElement("td");
      const price = document.createElement("price");
      price.textContent = el.price;
      td3.appendChild(price);
      tr.appendChild(td3);

      const td4 = document.createElement("td");
      const decFactor = document.createElement("decFactor");
      decFactor.textContent = el.decFactor;
      td4.appendChild(decFactor);
      tr.appendChild(td4);

      const td5 = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);
      table.appendChild(tr);
    });
  }

  function buy() {
    const checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(
      (checkbox) => checkbox.checked
    );
    console.log();
    const products = [];
    let totalPrice = 0;
    let decFactor = 0;
    checkBoxes.forEach((checkbox) => {
      totalPrice += Number(checkbox.parentElement.parentElement.querySelector("price").textContent);
      decFactor += Number(
        checkbox.parentElement.parentElement.querySelector("decfactor").textContent
      );
      products.push(checkbox.parentElement.parentElement.querySelector("name").textContent);
    });
    resultText.textContent += `Bought furniture: ${products.join(", ")}\n`;
    resultText.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultText.textContent += `Average decoration factor: ${decFactor / checkBoxes.length}`;
  }
}
