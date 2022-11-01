function schoolRegister(arr) {
  let studentsArr = [];
  const schoolReg = {};
  for (const student of arr) {
    let [name, grade, score] = student.split(", ");
    grade = Number(grade.split("Grade: ")[1]) + 1;
    score = Number(score.split("Graduated with an average score: ")[1]);
    name = name.split("Student name: ")[1];
    if (score > 3) {
      let el = { name, score };
      if (!schoolReg.hasOwnProperty(grade)) {
        schoolReg[grade] = [];
      }
      schoolReg[grade].push(el);
    }
  }

  const sorted = Object.keys(schoolReg).sort((a, b) => a - b);

  sorted.forEach((element) => {
    let students = schoolReg[element];
    console.log(`${element} Grade`);
    console.log(`List of students: ${students.map((x) => x.name).join(", ")}`);
    console.log(
      `Average annual score from last year: ${calcAvg(
        students.map((x) => x.score)
      ).toFixed(2)}`
    );
    console.log();
  });

  function calcAvg(arr) {
    return arr.reduce((acc, sum) => acc + sum, 0) / arr.length;
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
