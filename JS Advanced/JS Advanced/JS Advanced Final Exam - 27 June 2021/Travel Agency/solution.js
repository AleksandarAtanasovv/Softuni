window.addEventListener("load", solution);

function solution() {
  const fnameEl = document.getElementById("fname");
  const emailEl = document.getElementById("email");
  const phoneEl = document.getElementById("phone");
  const addressEl = document.getElementById("address");
  const codeEl = document.getElementById("code");
  const submitBTN = document.getElementById("submitBTN");
  const infoPreview = document.getElementById("infoPreview");
  const editBTN = document.getElementById("editBTN");
  const blockDiv = document.getElementById("block");
  const continueBTN = document.getElementById("continueBTN");
  submitBTN.addEventListener("click", addReservation);
  editBTN.addEventListener("click", editReservation);
  continueBTN.addEventListener("click", continueReservation);
  function addReservation(e) {
    e.preventDefault();
    if (fnameEl.value && emailEl.value) {
      const element = `
      <li>Full Name: ${fnameEl.value}</li>
      <li>Email: ${emailEl.value}</li>
      <li>Phone Number: ${phoneEl.value}</li>
      <li>Address: ${addressEl.value}</li>
      <li>Postal Code: ${codeEl.value}</li>
      `;
      infoPreview.innerHTML = element;
      submitBTN.disabled = true;
      editBTN.disabled = false;
      continueBTN.disabled = false;
      fnameEl.value = "";
      emailEl.value = "";
      phoneEl.value = "";
      addressEl.value = "";
      codeEl.value = "";
    }
  }
  function editReservation() {
    const values = [];
    Array.from(infoPreview.querySelectorAll("li")).forEach((el) => {
      values.push(el.textContent.split(": ")[1]);
    });
    const [fname, email, phone, address, code] = values;
    fnameEl.value = fname;
    emailEl.value = email;
    phoneEl.value = phone;
    addressEl.value = address;
    codeEl.value = code;
    editBTN.disabled = true;
    continueBTN.disabled = true;
    submitBTN.disabled = false;
    infoPreview.innerHTML = "";
  }
  function continueReservation() {
    blockDiv.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";
    blockDiv.appendChild(h3);
  }
}
