function search() {
  const towns = Array.from(document.querySelectorAll("#towns li"));
  const searchText = document.getElementById("searchText");
  const result = document.getElementById("result");
  let counter = 0;

  if (searchText.value.length > 0) {
    towns.forEach((town) => {
      if (town.textContent.toLowerCase().includes(searchText.value.toLowerCase())) {
        town.style.fontWeight = "bold";
        town.style.textDecoration = "underline";
        counter++;
      } else {
        town.style.fontWeight = "normal";
        town.style.textDecoration = "none";
      }
    });
  }
  searchText.value = "";
  result.textContent = `${counter} matches found`;
}
