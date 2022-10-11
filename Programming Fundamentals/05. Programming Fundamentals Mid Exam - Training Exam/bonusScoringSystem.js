function bonusScoringSystem(arr) {
  let numberOfStudents = Number(arr.shift());
  let totalNumberOflectures = Number(arr.shift());
  let additionalBonus = Number(arr.shift());

  let maxAttendance = 0;
  let maxBonus = 0;
  for (let i = 0; i < numberOfStudents; i++) {
    let attendances = arr[i];
    let bonus = (Number(attendances) / totalNumberOflectures) * (5 + additionalBonus);
    if (bonus >= maxBonus) {
      maxBonus = bonus;
      maxAttendance = attendances;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
