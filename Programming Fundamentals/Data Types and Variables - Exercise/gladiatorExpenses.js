function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenShield = 0;
  let total = 0;
  for (let i = 1; i <= Number(lostFights); i++) {
    if (i % 2 === 0) {
      total += Number(helmetPrice);
    }
    if (i % 3 === 0) {
      total += Number(swordPrice);
    }
    if (i % 2 === 0 && i % 3 === 0) {
      total += Number(shieldPrice);
      brokenShield++;
    }
    if (brokenShield > 0 && brokenShield % 2 === 0) {
      total += Number(armorPrice);
      brokenShield = 0;
    }
  }
  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
