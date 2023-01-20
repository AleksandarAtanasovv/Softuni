function sumTable() {
  const table = document.querySelectorAll("table td");
  const result = document.getElementById("sum");
  let sum = 0;
  Array.from(table).forEach((element) => {
    if (!isNaN(Number(element.textContent))) {
      sum += Number(element.textContent);
    }
  });
  result.textContent = sum;
}
