function create(words) {
  const content = document.getElementById("content");
  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);
  });
  const divs = Array.from(document.querySelectorAll("div"));
  divs.forEach((div) => {
    div.addEventListener("click", (e) => {
      e.target.querySelector("p").style.display = "block";
    });
  });
}
