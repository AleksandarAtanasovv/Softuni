function softUniReception(arr) {
  let totalAmountOfStudents = Number(arr[arr.length - 1]);
  let answerPerHour = 0;
  let hours = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    answerPerHour += Number(arr[i]);
  }
  while (totalAmountOfStudents > 0) {
    hours++;
    if (hours % 4 === 0) {
      hours++;
    }
    totalAmountOfStudents -= answerPerHour;
  }
  console.log(`Time needed: ${hours}h.`);
}
