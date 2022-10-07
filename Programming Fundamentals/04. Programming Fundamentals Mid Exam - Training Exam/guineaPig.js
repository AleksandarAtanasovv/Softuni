function guineaPig(arr) {
  let foodForAmonth = Number(arr[0]);
  let hayForAmonth = Number(arr[1]);
  let coverForAmonth = Number(arr[2]);
  let guineaPigWeight = Number(arr[3]);
  let foodInGrams = foodForAmonth * 1000;
  let hayForAmonthInGrams = hayForAmonth * 1000;
  let coverForAmonthInGrams = coverForAmonth * 1000;
  let guineaPigWeightInGrams = guineaPigWeight * 1000;

  for (let i = 1; i <= 30; i++) {
    foodInGrams -= 300;

    if (i % 2 === 0) {
      hayForAmonthInGrams -= foodInGrams * 0.05;
    }
    if (i % 3 === 0) {
      coverForAmonthInGrams -= guineaPigWeightInGrams * 0.3333;
    }
    if (
      foodInGrams <= 0 ||
      hayForAmonthInGrams <= 0 ||
      coverForAmonthInGrams <= 0
    ) {
      break;
    }
  }

  if (
    foodInGrams >= 0 &&
    hayForAmonthInGrams >= 0 &&
    coverForAmonthInGrams >= 0
  ) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(
        2
      )}, Hay: ${(hayForAmonthInGrams / 1000).toFixed(2)}, Cover: ${(
        coverForAmonthInGrams / 1000
      ).toFixed(2)}.`
    );
  } else {
    console.log("Merry must go to the pet store!");
  }
}
guineaPig(["10", "5", "5.2", "1"]);
