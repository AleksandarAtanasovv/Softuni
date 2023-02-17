function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let examMinutes = examHour * 60 + examMinute;
  let arriveMinutes = arriveHour * 60 + arriveMinute;
  let onTimeMins = arriveMinutes % 60;

  let mins = Math.abs(examMinutes - arriveMinutes);
  let hoursLate = Math.floor(mins / 60);
  let minsLate = Math.floor(mins % 60);

  if (arriveMinutes > examMinutes) {
    if (mins < 60) {
      console.log("Late");
      console.log(`${mins} minutes after the start`);
    } else if (mins >= 60) {
      if (minsLate < 10) {
        console.log("Late");
        console.log(`${hoursLate}:0${minsLate} hours after the start`);
      } else {
        console.log("Late");
        console.log(`${hoursLate}:${minsLate} hours after the start`);
      }
    }
  } else if (arriveMinutes === examMinutes || mins <= 30) {
    console.log("On time");
    if (onTimeMins !== 0) {
      console.log(`${mins} minutes before the start`);
    }
  } else if (arriveMinutes > 30) {
    if (mins < 60) {
      console.log("Early");
      console.log(`${mins} minutes before the start`);
    } else if (mins >= 60) {
      if (minsLate < 10) {
        console.log("Early");
        console.log(`${hoursLate}:0${minsLate} hours before the start`);
      } else {
        console.log("Early");
        console.log(`${hoursLate}:${minsLate} hours before the start`);
      }
    }
  }
}
onTimeForTheExam(["14", "00", "13", "55"]);
