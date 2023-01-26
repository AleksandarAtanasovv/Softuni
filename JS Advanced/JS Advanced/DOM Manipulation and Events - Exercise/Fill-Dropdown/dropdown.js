function addItem() {
  const textField = document.getElementById("newItemText");
  const valueField = document.getElementById("newItemValue");
  const select = document.getElementById("menu");
  const option = document.createElement("option");
  option.textContent = textField.value;
  option.value = valueField.value;
  select.appendChild(option);
  textField.value = "";
  valueField.value = "";
}
