function addContacts() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  const form = document.getElementById("form").addEventListener("submit", addContact);
  const tbody = document.querySelector("tbody");
  async function addContact(e) {
    e.preventDefault();
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (firstName && lastName && facultyNumber && grade) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          facultyNumber,
          grade,
        }),
      });
    } else {
      alert("All fields must be filled");
    }
  }
  async function getAllStudents() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      Object.values(data).forEach((student) => {
        const tr = document.createElement("tr");
        const tdFname = document.createElement("td");
        const tdLname = document.createElement("td");
        const tdFacNum = document.createElement("td");
        const tdGrade = document.createElement("td");
        tdFname.textContent = student.firstName;
        tdLname.textContent = student.lastName;
        tdFacNum.textContent = student.facultyNumber;
        tdGrade.textContent = student.grade;
        tr.appendChild(tdFname);
        tr.appendChild(tdLname);
        tr.appendChild(tdFacNum);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
      });
    } catch (err) {
      return alert(err);
    }
  }
  getAllStudents();
}
addContacts();
