function meetings(arr) {
  const appointMents = {};
  for (const line of arr) {
    let [day, name] = line.split(" ");
    if (appointMents[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      appointMents[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (const key in appointMents) {
    console.log(`${key} -> ${appointMents[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
