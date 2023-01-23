function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const result = document.getElementById("result");
  const searchField = document.getElementById("searchField");
  const trs = Array.from(document.querySelectorAll("tbody tr"));
  function onClick() {
    if (searchField.value.length > 0) {
      trs.forEach((element) => {
        if (element.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
          element.classList.add("select");
        } else {
          element.classList.remove("select");
        }
      });
    }
    searchField.value = "";
  }
}
