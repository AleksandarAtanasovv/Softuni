function extractText() {
  const result = document.getElementById("result");
  const items = document.querySelectorAll("#items li");
  Array.from(items).forEach((item) => {
    result.textContent += item.textContent + "\n";
  });
}
