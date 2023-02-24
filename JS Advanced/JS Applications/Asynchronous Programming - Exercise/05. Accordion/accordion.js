window.addEventListener("load", () => {
  solution();
});

function solution() {
  fetch("http://localhost:3030/jsonstore/advanced/articles/list")
    .then((res) => res.json())
    .then((data) => loadArticles(data));

  function loadArticles(data) {
    const main = document.getElementById("main");
    data.forEach(async (article) => {
      const res = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`
      );
      const data = await res.json();
      const div = document.createElement("div");
      div.classList.add("accordion");
      div.innerHTML = `
          <div class="head">
          <span>${article.title}</span>
          <button class="button" id="${article._id}">More</button>
            </div>
            <div class="extra">
                <p>${data.content}</p>
            </div>
          `;
      div.querySelector(".extra").style.display = "none";
      div.querySelector("button").addEventListener("click", (e) => {
        const extra = e.target.parentElement.parentElement.querySelector(".extra");
        if (e.target.textContent == "More") {
          extra.style.display = "block";
          e.target.textContent = "LESS";
        } else {
          extra.style.display = "none";
          e.target.textContent = "More";
        }
      });
      main.appendChild(div);
    });
  }
}
