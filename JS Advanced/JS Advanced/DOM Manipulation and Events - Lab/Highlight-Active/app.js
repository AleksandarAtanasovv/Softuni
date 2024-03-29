function focused() {
  const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      e.target.parentNode.classList.add("focused");
    });
    input.addEventListener("blur", (e) => {
      e.target.parentNode.classList.remove("focused");
    });
  });
}
