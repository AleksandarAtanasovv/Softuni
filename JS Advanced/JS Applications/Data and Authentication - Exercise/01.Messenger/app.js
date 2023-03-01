function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const options = {};
  const messageBox = document.getElementById("messages");

  document.getElementById("submit").addEventListener("click", () => {
    options.method = "POST";
    options.headers = {
      "Content-Type": "application/json",
    };
    const author = document.querySelector('input[name="author"]').value;
    const message = document.querySelector('input[name="content"]').value;
    const body = {
      author,
      content: message,
    };
    options.body = JSON.stringify(body);
    fetch(url, options).then(() => {
      document.querySelector('input[name="author"]').value = "";
      document.querySelector('input[name="content"]').value = "";
    });
  });
  document.getElementById("refresh").addEventListener("click", () => {
    messageBox.textContent = "";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const res = [];
        for (const key in data) {
          if (data[key].content) {
            res.push(`${data[key].author}: ${data[key].content}`);
          }
        }
        messageBox.textContent = res.join("\n");
      });
  });
}

attachEvents();
