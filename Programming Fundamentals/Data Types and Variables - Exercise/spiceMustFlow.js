function spiceMustFlow(spice) {
  let totalSpice = spice;
  let total = 0;
  let totalDays = 0;
  while (totalSpice >= 100) {
    total += totalSpice;
    if (total >= 26) {
      total -= 26;
    }
    totalSpice -= 10;
    totalDays++;
    if (totalSpice < 100) {
      if (total >= 26) {
        total -= 26;
      }
    }
    if (total < 0) {
      total = 0;
    }
  }
  console.log(totalDays);
  console.log(total);
}
spiceMustFlow(450);
