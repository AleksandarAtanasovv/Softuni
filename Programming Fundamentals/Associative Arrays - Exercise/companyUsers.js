function companyUsers(arr) {
  const employees = {};
  let set;
  for (const el of arr) {
    let [company, ...id] = el.split(" -> ");
    if (!employees.hasOwnProperty(company)) {
      employees[company] = id;
    } else {
      if (employees[company].includes(...id) === false) {
        employees[company].push(id);
      }
    }
  }
  const sorted = Object.entries(employees).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [company, id] of sorted) {
    if (employees[company].length >= 2) {
      console.log(company);
      console.log(`-- ${employees[company].join("\n-- ")}`);
    } else {
      console.log(company);
      console.log(`-- ${employees[company]}`);
    }
  }
}
companyUsers(["SoftUni -> AA12345", "SoftUni -> CC12344", "Lenovo -> XX23456", "SoftUni -> AA12345", "Movement -> DD11111"]);
