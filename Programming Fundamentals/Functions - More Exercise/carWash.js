function carWash(arr) {
  let cleanValue = 0;
  for (const item of arr) {
    if (item === "soap") {
      cleanValue += 10;
    }
    if (item === "water") {
      cleanValue += cleanValue * 0.2;
    }
    if (item === "vacuum cleaner") {
      cleanValue += cleanValue * 0.25;
    }
    if (item === "mud") {
      cleanValue -= cleanValue * 0.1;
    }
  }
  console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
