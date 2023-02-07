class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (name && salary && position && department && salary >= 0) {
      if (!this.departments.hasOwnProperty(department)) {
        this.departments[department] = [
          {
            name,
            salary,
            position,
          },
        ];
      } else {
        this.departments[department].push({ name, salary, position });
      }
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    } else {
      throw new Error("Invalid input!");
    }
  }
  bestDepartment() {
    const departmentAvgSalaries = {};
    const departments = this.departments;
    for (const key in departments) {
      const avgSalary =
        departments[key].reduce((acc, val) => acc + Number(val.salary), 0) /
        departments[key].length;
      departmentAvgSalaries[key] = avgSalary;
    }
    const sortedAvgSalaries = Object.entries(departmentAvgSalaries).sort((a, b) => b[1] - a[1]);
    const res = [];
    res.push(`Best Department is: ${sortedAvgSalaries[0][0]}`);
    res.push(`Average salary: ${sortedAvgSalaries[0][1].toFixed(2)}`);
    const sortedEmployees = departments[sortedAvgSalaries[0][0]].sort(
      (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
    );
    for (const item of sortedEmployees) {
      res.push(`${item.name} ${item.salary} ${item.position}`);
    }
    return res.join("\n");
  }
}
let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
