function validate() {
  const input = document.getElementById("email");
  input.addEventListener("change", (e) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });
}
