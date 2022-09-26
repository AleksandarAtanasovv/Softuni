function dayOfWeek(day) {
  const daysInWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day >= 1 && day <= 7) {
    if (day === 1) {
      console.log(daysInWeek[0]);
    } else if (day === 2) {
      console.log(daysInWeek[1]);
    } else if (day === 3) {
      console.log(daysInWeek[2]);
    } else if (day === 4) {
      console.log(daysInWeek[3]);
    } else if (day === 5) {
      console.log(daysInWeek[4]);
    } else if (day === 6) {
      console.log(daysInWeek[5]);
    } else if (day === 7) {
      console.log(daysInWeek[6]);
    }
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
