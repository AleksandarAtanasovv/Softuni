function theLift(arr) {
  let peopleInQueue = Number(arr[0]);
  let lift = arr[1].split(" ").map(Number);
  for (let i = 0; i < lift.length; i++) {
    while (lift[i] < 4 && peopleInQueue > 0) {
      peopleInQueue--;
      lift[i]++;
    }
  }
  let isThereSpace = false;
  for (const el of lift) {
    if (el < 4) {
      isThereSpace = true;
    }
  }
  if (peopleInQueue <= 0 && isThereSpace === false) {
    console.log(lift.join(" "));
  } else {
    if (isThereSpace) {
      console.log("The lift has empty spots!");
      console.log(lift.join(" "));
    } else {
      console.log(
        `There isn't enough space! ${peopleInQueue} people in a queue!`
      );
      console.log(lift.join(" "));
    }
  }
}
theLift(["15", "0 0 0 0"]);
