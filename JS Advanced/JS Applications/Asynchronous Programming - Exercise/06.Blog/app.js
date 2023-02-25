function attachEvents() {
  const posts = document.getElementById("posts");
  const postComments = document.getElementById("post-comments");
  document.getElementById("btnLoadPosts").addEventListener("click", loadPosts);
  function loadPosts() {
    fetch("http://localhost:3030/jsonstore/blog/posts")
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          const option = document.createElement("option");
          option.value = key;
          option.textContent = data[key].title;
          posts.appendChild(option);
        }
      });
  }
  const viewBtn = document.getElementById("btnViewPost");
  viewBtn.addEventListener("click", viewPost);

  function viewPost() {
    const id = posts.value;
    fetch(`http://localhost:3030/jsonstore/blog/posts`)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("post-title").textContent = posts.options[posts.selectedIndex].text;
        document.getElementById("post-body").textContent = data[id].body;
        fetch("http://localhost:3030/jsonstore/blog/comments")
          .then((res) => res.json())
          .then((data) => {
            postComments.innerHTML = "";
            const comments = Object.values(data).filter((x) => x.postId === id);
            comments.forEach((comment) => {
              const li = document.createElement("li");
              li.id = comment.id;
              li.textContent = comment.text;
              postComments.appendChild(li);
            });
          });
      });
  }
}

attachEvents();
