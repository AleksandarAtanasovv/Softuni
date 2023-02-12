function solve() {
  const recipientNameInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const addBtn = document.getElementById("add");
  const resetBtn = document.getElementById("reset");
  const ulList = document.getElementById("list");
  const sentList = document.querySelector(".sent-list");
  const deletedList = document.querySelector(".delete-list");
  const values = [];
  addBtn.addEventListener("click", addMail);
  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    recipientNameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  });
  function addMail(e) {
    e.preventDefault();
    if (recipientNameInput.value && titleInput.value && messageInput.value) {
      const li = document.createElement("li");
      const htmlEl = `
                    <h4>Title: ${titleInput.value}</h4>
                    <h4>Recipient Name: ${recipientNameInput.value}</h4>
                    <span>${messageInput.value}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>
      `;
      li.innerHTML = htmlEl;
      ulList.appendChild(li);
      const values = [recipientNameInput.value, titleInput.value, messageInput.value];
      li.querySelector("#send").addEventListener("click", sendMail);
      li.querySelector("#delete").addEventListener("click", (e) => {
        const [name, title, msg] = values;
        const liDeleted = document.createElement("li");
        const htmlElDeleted = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>
    `;
        liDeleted.innerHTML = htmlElDeleted;
        deletedList.appendChild(liDeleted);
        e.target.parentElement.parentElement.remove();
      });
      recipientNameInput.value = "";
      titleInput.value = "";
      messageInput.value = "";
      function sendMail(e) {
        const parent = e.target.parentElement.parentElement;
        let [title, name] = parent.querySelectorAll("h4");
        const message = parent.querySelector("span");
        const liSent = document.createElement("li");
        const htmlElSent = `
                    <h4>${title.textContent}</h4>
                    <h4>${name.textContent}</h4>
                    <span>${message.textContent}</span>
                    <div class="btn">
                      <button type="submit" class="delete">Delete</button>
                    </div>
      `;
        liSent.innerHTML = htmlElSent;
        sentList.appendChild(liSent);
        li.remove();
        liSent.querySelector(".delete").addEventListener("click", (e) => {
          const liDeleted = document.createElement("li");
          const htmlElDeleted = `
            <span>To: ${name.textContent}</span>
            <span>Title: ${title.textContent}</span>
      `;
          liDeleted.innerHTML = htmlElDeleted;
          deletedList.appendChild(liDeleted);
          e.target.parentElement.parentElement.remove();
        });
      }
    } else {
      return;
    }
  }
}
solve();
