function addItem() {
  const list = document.getElementById("items");
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.textContent = document.getElementById("newItemText").value;
  li.innerHTML += `<a href="#">[Delete]</a>`;
  list.appendChild(li);
  document.querySelector("#items").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.target.parentNode.remove();
    }
  });
  document.getElementById("newItemText").value = "";
}
