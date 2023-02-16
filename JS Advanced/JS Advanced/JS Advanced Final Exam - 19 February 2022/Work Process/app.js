function solve() {
  const tbody = document.getElementById("tbody");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const birth = document.getElementById("birth");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");
  const addWorkerBtn = document.getElementById("add-worker");
  const sumEl = document.getElementById("sum");
  addWorkerBtn.addEventListener("click", addWorker);
  let sum = 0;
  function addWorker(e) {
    e.preventDefault();
    if (
      fname.value &&
      lname.value &&
      email.value &&
      birth.value &&
      position.value &&
      salary.value
    ) {
      const tr = document.createElement("tr");
      const element = `
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${email.value}</td>
        <td>${birth.value}</td>
        <td>${position.value}</td>
        <td>${salary.value}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
        `;
      tr.innerHTML = element;
      tbody.appendChild(tr);
      sum += Number(salary.value);
      sumEl.textContent = sum.toFixed(2);
      fname.value = "";
      lname.value = "";
      email.value = "";
      birth.value = "";
      position.value = "";
      salary.value = "";
      const editBtn = tr.querySelector(".edit");
      const firedBtn = tr.querySelector(".fired");
      editBtn.addEventListener("click", editWorker);
      firedBtn.addEventListener("click", fireWorker);
      function editWorker(e) {
        e.preventDefault();
        const parentElement = e.target.parentElement.parentElement;
        const [fnameVal, lnameVal, emailVal, birthVal, positionVal, salaryVal, ,] = Array.from(
          parentElement.querySelectorAll("td")
        );
        fname.value = fnameVal.textContent;
        lname.value = lnameVal.textContent;
        email.value = emailVal.textContent;
        birth.value = birthVal.textContent;
        position.value = positionVal.textContent;
        salary.value = salaryVal.textContent;
        let currentSum = Number(sumEl.textContent);
        currentSum -= Number(salaryVal.textContent);
        sum -= Number(salaryVal.textContent);
        sumEl.textContent = currentSum.toFixed(2);
        parentElement.remove();
      }
      function fireWorker(e) {
        const parent = e.target.parentElement.parentElement;
        const [fnameVal, lnameVal, emailVal, birthVal, positionVal, salaryVal, ,] = Array.from(
          parent.querySelectorAll("td")
        );
        let currentSum = Number(sumEl.textContent);
        currentSum -= Number(salaryVal.textContent);
        sum -= Number(salaryVal.textContent);
        sumEl.textContent = currentSum.toFixed(2);
        parent.remove();
      }
    } else {
      return;
    }
  }
}
solve();
