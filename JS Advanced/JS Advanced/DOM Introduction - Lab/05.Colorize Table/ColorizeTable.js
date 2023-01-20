function colorize() {
  const items = document.querySelectorAll("tr");
  Array.from(items).forEach((x, i) => {
    if (i % 2 !== 0) {
      x.style.backgroundColor = "Teal";
    }
  });
}
