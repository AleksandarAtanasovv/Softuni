window.addEventListener("load", solve);

function solve() {
  const firstname = document.getElementById("first-name");
  const lastname = document.getElementById("last-name");
  const peoplecount = document.getElementById("people-count");
  const fromdate = document.getElementById("from-date");
  const dayscount = document.getElementById("days-count");
  const nextbtn = document.getElementById("next-btn");
  const ticketInfoList = document.querySelector(".ticket-info-list");
  const confirmTicketList = document.querySelector(".confirm-ticket");
  nextbtn.addEventListener("click", buyTicket);

  function buyTicket(e) {
    e.preventDefault();
    if (
      firstname.value &&
      lastname.value &&
      peoplecount.value &&
      fromdate.value &&
      dayscount.value
    ) {
      const li = document.createElement("li");
      li.classList.add("ticket");
      const element = `
      <article>
      <h3>Name: ${firstname.value} ${lastname.value}</h3>
      <p>From date: ${fromdate.value}</p>
      <p>For ${dayscount.value} days</p>
      <p>For ${peoplecount.value} people</p>
      </article>
      <button class="edit-btn">Edit</button>
      <button class="continue-btn">Continue</button>
      `;
      li.innerHTML = element;
      ticketInfoList.appendChild(li);
      li.querySelector(".edit-btn").addEventListener("click", editTicket);
      li.querySelector(".continue-btn").addEventListener("click", continueTicket);
      firstname.value = "";
      lastname.value = "";
      peoplecount.value = "";
      fromdate.value = "";
      dayscount.value = "";
      nextbtn.disabled = true;
      function editTicket(e) {
        e.preventDefault();
        const parent = e.target.parentElement;
        const [, fName, lName] = parent.querySelector("h3").textContent.split(" ");
        const [date, days, people] = Array.from(parent.querySelectorAll("p"));
        firstname.value = fName;
        lastname.value = lName;
        peoplecount.value = people.textContent.split(" ")[1];
        fromdate.value = date.textContent.split(": ")[1];
        dayscount.value = days.textContent.split(" ")[1];
        parent.remove();
        nextbtn.disabled = false;
      }
      function continueTicket(e) {
        e.preventDefault();
        const li = document.createElement("li");
        li.classList.add("ticket-content");
        const parent = e.target.parentElement;
        const fullName = parent.querySelector("h3").textContent;
        const [date, days, people] = Array.from(parent.querySelectorAll("p"));
        const element = `
        <article>
        <h3>${fullName}</h3>
        <p>${date.textContent}</p>
        <p>${days.textContent}</p>
        <p>${people.textContent}</p>
        </article>
        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn">Cancel</button>
        `;
        li.innerHTML = element;
        confirmTicketList.appendChild(li);
        parent.remove();

        li.querySelector(".cancel-btn").addEventListener("click", cancelTicket);
        li.querySelector(".confirm-btn").addEventListener("click", confirmTicket);

        function cancelTicket(e) {
          e.preventDefault();
          const parent = e.target.parentElement;
          parent.remove();
          nextbtn.disabled = false;
        }
        function confirmTicket(e) {
          e.preventDefault();
          document.getElementById("main").remove();
          const body = document.getElementById("body");

          const h1 = document.createElement("h1");
          h1.id = "thank-you";
          h1.textContent = "Thank you, have a nice day! ";
          const button = document.createElement("button");
          button.id = "back-btn";
          button.textContent = "Back";
          button.addEventListener("click", () => {
            window.location.reload();
          });
          body.appendChild(h1);
          body.appendChild(button);
        }
      }
    } else {
      return;
    }
  }
}
