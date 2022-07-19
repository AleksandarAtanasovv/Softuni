function vacation(input) {
  let index = 0;
  let moneyNeeded = Number(input[index]);
  index++;
  let moneyAvailable = Number(input[index]);
  index++;
  let daysSpent = 0;
  let daysSaved = 0;
  let days = 0;
  while (moneyNeeded > moneyAvailable) {
    let action = input[index];
    index++;
    let sum = Number(input[index]);
    index++;
    switch (action) {
      case "spend":
        moneyAvailable -= sum;
        daysSpent++;
  
        break;
      case "save":
        daysSpent =0;
        moneyAvailable += sum;
        daysSaved++;
        break;
    }
    days ++
    if (moneyAvailable < 0) {
      moneyAvailable = 0;
    }
    if (daysSpent >= 5) {
        daysSaved = 0;
        console.log(`You can't save the money.`);
        console.log(days);
        break;
      }
      
  }
  if (moneyAvailable >= moneyNeeded) {
    console.log(`You saved the money for ${days} days.`);
  }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])


