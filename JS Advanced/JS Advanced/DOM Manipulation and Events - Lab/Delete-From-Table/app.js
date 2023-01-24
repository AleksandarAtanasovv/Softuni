function deleteByEmail() {
  const customers = Array.from(document.querySelectorAll("#customers tbody tr"));
  const query = document.querySelector('input[type="text"]');
  const find = customers.find((x) => x.children[1].textContent === query.value);
  const result = document.getElementById("result");
  if (find) {
    result.textContent = "Deleted.";
    find.remove();
  } else {
    result.textContent = "Not found.";
  }
}
