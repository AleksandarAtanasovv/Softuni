function addItem() {
  const list = document.getElementById("items");
  const li = document.createElement("li");
  li.textContent = document.getElementById("newItemText").value;
  list.appendChild(li);
}
