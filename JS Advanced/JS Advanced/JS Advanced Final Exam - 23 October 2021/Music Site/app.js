window.addEventListener("load", solve);

function solve() {
  const genre = document.getElementById("genre");
  const name = document.getElementById("name");
  const author = document.getElementById("author");
  const date = document.getElementById("date");
  const addBtn = document.getElementById("add-btn");
  const allHitsContainer = document.querySelector(".all-hits-container");
  const savedContainer = document.querySelector(".saved-container");

  addBtn.addEventListener("click", addSong);

  function addSong(e) {
    e.preventDefault();
    if (genre.value && name.value && author.value && date.value) {
      const div = document.createElement("div");
      div.classList.add("hits-info");
      const element = `
        <img src="./static/img/img.png">
        <h2>Genre: ${genre.value}</h2>
        <h2>Name: ${name.value}</h2>
        <h2>Author: ${author.value}</h2>
        <h3>Date: ${date.value}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>
        `;
      div.innerHTML = element;
      allHitsContainer.appendChild(div);
      genre.value = "";
      name.value = "";
      author.value = "";
      date.value = "";
      const likeBtn = div.querySelector(".like-btn");
      const saveSongBtn = div.querySelector(".save-btn");
      const deleteBtn = div.querySelector(".delete-btn");
      likeBtn.addEventListener("click", likeSong);
      saveSongBtn.addEventListener("click", saveSong);
      deleteBtn.addEventListener("click", deleteSong);
      function likeSong(e) {
        const likes = document.getElementById("total-likes");
        const likeCount = likes.querySelector("p");
        likeCount.textContent = `Total Likes: ${Number(likeCount.textContent.split(": ")[1]) + 1}`;
        e.target.disabled = true;
      }
      function saveSong(e) {
        const parent = e.target.parentElement;
        const div2 = document.createElement("div");
        div2.classList.add("hits-info");
        const [genre, name, author] = Array.from(parent.querySelectorAll("h2"));
        const date = parent.querySelector("h3");
        const element2 = `
        <img src="./static/img/img.png">
        <h2>${genre.textContent}</h2>
        <h2>${name.textContent}</h2>
        <h2>${author.textContent}</h2>
        <h3>${date.textContent}</h3>
        <button class="delete-btn">Delete</button>
        `;
        div2.innerHTML = element2;
        savedContainer.appendChild(div2);
        div2.querySelector(".delete-btn").addEventListener("click", (e) => {
          e.target.parentElement.remove();
        });
        e.target.parentElement.remove();
      }
      function deleteSong(e) {
        e.target.parentElement.remove();
      }
    } else {
      return;
    }
  }
}
