window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuel = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingPrice = document.getElementById("selling-price");
  const from = document.querySelector("form");
  const tbody = document.getElementById("table-body");

  let totalProfit = 0;
  const publishBtn = document.getElementById("publish");
  from.addEventListener("submit", formFunc);

  function formFunc(e) {
    e.preventDefault();
  }
  publishBtn.addEventListener("click", addOffer);
  function addOffer() {
    const editBtn = document.createElement("button");
    const sellBtn = document.createElement("button");
    const values = [];
    const tr = document.createElement("tr");
    if (
      make.value &&
      model.value &&
      year.value &&
      fuel.value &&
      originalCost.value &&
      sellingPrice.value
    ) {
      if (Number(originalCost.value) < Number(sellingPrice.value)) {
        tr.classList.add("row");
        const makeTd = document.createElement("td");
        makeTd.textContent = make.value;
        const modelTd = document.createElement("td");
        modelTd.textContent = model.value;
        const yearTd = document.createElement("td");
        yearTd.textContent = year.value;
        const fuelTd = document.createElement("td");
        fuelTd.textContent = fuel.value;
        const originalCostTd = document.createElement("td");
        originalCostTd.textContent = originalCost.value;
        const sellingPriceTd = document.createElement("td");
        sellingPriceTd.textContent = sellingPrice.value;
        const buttonsTd = document.createElement("td");
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        sellBtn.classList.add("action-btn");
        sellBtn.classList.add("sell");
        sellBtn.textContent = "Sell";
        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(sellBtn);
        tr.appendChild(makeTd);
        tr.appendChild(modelTd);
        tr.appendChild(yearTd);
        tr.appendChild(fuelTd);
        tr.appendChild(originalCostTd);
        tr.appendChild(sellingPriceTd);
        tr.appendChild(buttonsTd);
        tbody.appendChild(tr);
        values.push(
          make.value,
          model.value,
          year.value,
          fuel.value,
          originalCost.value,
          sellingPrice.value
        );
        make.value = "";
        model.value = "";
        year.value = "";
        fuel.value = "";
        originalCost.value = "";
        sellingPrice.value = "";
      }
      editBtn.addEventListener("click", editOffer);
      function editOffer() {
        const parentElement = editBtn.parentElement.parentElement;
        const [makeValue, modelValue, yearValue, fuelValue, priceValue, newPriceValue] = Array.from(
          parentElement.querySelectorAll("td")
        );
        model.value = modelValue.textContent;
        make.value = makeValue.textContent;
        year.value = yearValue.textContent;
        fuel.value = fuelValue.textContent;
        originalCost.value = priceValue.textContent;
        sellingPrice.value = newPriceValue.textContent;
        editBtn.parentElement.parentElement.remove();
      }
      sellBtn.addEventListener("click", sellCar);
      function sellCar() {
        const profitField = document.getElementById("profit");
        const parentElement = sellBtn.parentElement.parentElement;
        const ul = document.getElementById("cars-list");
        const li = document.createElement("li");
        li.classList.add("each-list");
        const makeModelSpan = document.createElement("span");
        const yearSpan = document.createElement("span");
        const differenceSpan = document.createElement("span");
        const [makeValue, modelValue, yearValue, _, priceValue, newPriceValue] = Array.from(
          parentElement.querySelectorAll("td")
        );
        totalProfit += Number(newPriceValue.textContent) - Number(priceValue.textContent);
        makeModelSpan.textContent = makeValue.textContent + " " + modelValue.textContent;
        yearSpan.textContent = yearValue.textContent;
        differenceSpan.textContent =
          Number(newPriceValue.textContent) - Number(priceValue.textContent);
        li.appendChild(makeModelSpan);
        li.appendChild(yearSpan);
        li.appendChild(differenceSpan);
        ul.appendChild(li);
        profitField.textContent = totalProfit.toFixed(2);
        parentElement.remove();
      }
    } else {
      return;
    }
  }
}
