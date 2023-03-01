function attachEvents() {
  const phonebook = document.getElementById("phonebook");
  const btnLoad = document.getElementById("btnLoad");
  const btnCreate = document.getElementById("btnCreate");
  btnLoad.addEventListener("click", loadContacts);
  const baseUrl = "http://localhost:3030/jsonstore/phonebook";
  async function loadContacts() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    phonebook.innerHTML = "";
    Object.values(data).forEach((contact) => {
      const li = document.createElement("li");
      li.textContent = `${contact.person}: ${contact.phone}`;
      const button = document.createElement("button");
      button.id = contact._id;
      button.textContent = "Delete";
      li.appendChild(button);
      phonebook.appendChild(li);
    });
  }
  phonebook.addEventListener("click", deleteContact);

  async function deleteContact(e) {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.id;
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        return alert(res.message);
      }
    }
  }
  btnCreate.addEventListener("click", addContact);

  async function addContact() {
    const person = document.getElementById("person");
    const phone = document.getElementById("phone");
    const body = {
      person: person.value,
      phone: phone.value,
    };
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return alert(res.message);
    }
    person.value = "";
    phone.value = "";
  }
}

attachEvents();
