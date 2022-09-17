function bitcoinMining(arr) {
  let totalMoney = 0;
  let dayBoughtBitcoin = 0;
  let totalBitcoins = 0;
  let grams = 0;
  let days = 0;
  let currentGrams = 0;
  let currentDay = 0;
  let currentMoney = 0;
  for (let i = 0; i < arr.length; i++) {
    days++;
    currentGrams = arr[i];

    if (days % 3 === 0) {
      currentGrams *= 0.7;
    }
    grams += currentGrams;
    totalMoney = grams * 67.51;
    if (totalMoney >= 11949.16 && dayBoughtBitcoin === 0) {
      dayBoughtBitcoin = days;
    }
  }
  while (totalMoney >= 11949.16) {
    totalMoney -= 11949.16;
    totalBitcoins++;
  }
  console.log(`Bought bitcoins: ${totalBitcoins}`);
  if (totalBitcoins >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayBoughtBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
