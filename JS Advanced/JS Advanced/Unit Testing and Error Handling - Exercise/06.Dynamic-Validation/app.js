function validate() {
  const emailField = document.getElementById("email");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  emailField.addEventListener("change", (e) => {
    if (!emailRegex.test(e.target.value)) {
      emailField.classList.add("error");
    } else {
      emailField.classList.remove("error");
    }
  });
}
