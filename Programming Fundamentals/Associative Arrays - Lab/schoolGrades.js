function schoolGrades(arr) {
  const arrOfStudents = [];
  const student = {};
  for (const line of arr) {
    let [name, ...grades] = line.split(" ");
    if (student[name]) {
      student[name].push(...grades);
    } else {
      student[name] = grades;
    }
  }
  const sortedStudents = Object.entries(student).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const student of sortedStudents) {
    let sum =
      student[1].map(Number).reduce((acc, sum) => sum + acc, 0) /
      student[1].length;
    console.log(`${student[0]}: ${sum.toFixed(2)}`);
  }
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);
