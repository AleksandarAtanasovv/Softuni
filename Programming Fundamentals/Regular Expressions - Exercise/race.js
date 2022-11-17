function race(arr) {
  let patternName = /[A-Za-z]/g;

  let patternDistance = /[0-9]/g;

  let names = arr.shift().split(", ");
  let line = arr.shift();
  let participants = {};
  while (line !== "end of race") {
    let name = line.match(patternName).join("");

    let distanceSum = line.match(patternDistance).join("");

    let currentDistance = 0;
    for (const el of distanceSum) {
      currentDistance += Number(el);
    }
    if (names.includes(name)) {
      if (!participants.hasOwnProperty(name)) {
        participants[name] = Number(currentDistance);
      } else {
        participants[name] += Number(currentDistance);
      }
    }
    line = arr.shift();
  }
  let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race(["Ronald, Bill, Tom, Timmy, Maggie, Michonne", "Mi*&^%$ch123o!#$%#nne787) ", "%$$B(*&&)i89ll)*&) ", "R**(on%^&ald992) ", "T(*^^%immy77) ", "Ma10**$#g0g0g0i0e", "end of race"]);
