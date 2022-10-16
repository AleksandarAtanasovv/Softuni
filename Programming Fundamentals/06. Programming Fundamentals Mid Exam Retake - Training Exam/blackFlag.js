function blackFlag(arr) {
  let [piratingDays, plunderPerDay, expectedPlunder] = arr.map(Number);

  let totalPlunderCollected = 0;
  for (let i = 1; i <= piratingDays; i++) {
    totalPlunderCollected += plunderPerDay;

    if (i % 3 === 0) {
      totalPlunderCollected += plunderPerDay * 0.5;
    }
    if (i % 5 === 0) {
      totalPlunderCollected -= totalPlunderCollected * 0.3;
    }
  }
  let percentage = Math.abs(totalPlunderCollected / expectedPlunder) * 100;

  if (totalPlunderCollected >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunderCollected.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
