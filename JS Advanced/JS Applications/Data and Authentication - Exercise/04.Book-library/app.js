function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/books";
  const tbody = document.querySelector("tbody");
  const loadBtn = document.getElementById("loadBooks").addEventListener("click", getAllBooks);
  const form = document.querySelector("form");
  async function getAllBooks() {
    tbody.innerHTML = "";
    const res = await fetch(baseUrl);
    const data = await res.json();
    Object.entries(data).forEach(([id, book]) => {
      const tr = document.createElement("tr");
      const element = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button data-id=${id}>Edit</button>
            <button data-id=${id}>Delete</button>
        </td>
        `;
      tr.innerHTML = element;
      tbody.appendChild(tr);
    });
  }
  form.addEventListener("submit", addBook);

  async function addBook(e) {
    e.preventDefault();

    const { author, title } = Object.fromEntries(new FormData(e.currentTarget));
    if (author && title) {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          title,
        }),
      });
      if (!res.ok) {
        return alert(res.message);
      }
      document.querySelector('input[name="title"]').value = "";
      document.querySelector('input[name="author"]').value = "";
    } else {
      return alert("All fields must be filled");
    }
  }
  tbody.addEventListener("click", editBook);

  function editBook(e) {
    const parent = e.target.parentElement.parentElement;
    const currentEl = e.target;
    if (e.target.tagName === "BUTTON") {
      if (e.target.textContent == "Edit") {
        e.preventDefault();
        const [title, author] = Array.from(parent.querySelectorAll("td"));
        form.querySelector("h3").textContent = "Edit FORM";
        form.querySelector("button").textContent = "Save";
        form.querySelector('input[name="author"]').value = author.textContent;
        form.querySelector('input[name="title"]').value = title.textContent;
        form.querySelector("button").addEventListener("click", submitEdit);
        async function submitEdit(e) {
          e.preventDefault();
          const title = form.querySelector('input[name="title"]').value;
          const author = form.querySelector('input[name="author"]').value;
          const id = currentEl.dataset.id;
          const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              author,
              title,
            }),
          });
          if (!res.ok) {
            return alert(res.message);
          }
          form.querySelector("h3").textContent = "FORM";
          form.querySelector("button").textContent = "Submit";
          form.querySelector('input[name="author"]').value = "";
          form.querySelector('input[name="title"]').value = "";
        }
      } else if (e.target.textContent == "Delete") {
        async function submitDelete() {
          const id = currentEl.dataset.id;
          const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!res.ok) {
            return alert(res.message);
          }
        }
        submitDelete();
      }
    }
  }
}
attachEvents();
