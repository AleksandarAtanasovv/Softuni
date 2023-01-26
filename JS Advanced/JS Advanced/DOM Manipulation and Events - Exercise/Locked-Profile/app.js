function lockedProfile() {
  const unlocked = Array.from(document.querySelectorAll('input[value="unlock"]'));
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((button) => {
    button.addEventListener("click", show);
  });
  function show(e) {
    const isChecked = e.target.parentElement.querySelector('input[value="unlock"]').checked;
    if (isChecked) {
      const divToShow = e.target.parentElement.querySelector("div");
      divToShow.style.display === "block"
        ? (divToShow.style.display = "none")
        : (divToShow.style.display = "block");
      e.target.textContent === "Show more"
        ? (e.target.textContent = "Hide it")
        : (e.target.textContent = "Show More");
    }
  }
}
