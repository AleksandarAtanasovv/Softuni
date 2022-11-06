function piccolo(arr) {
  const parking = {};
  for (const el of arr) {
    let [direction, carNumber] = el.split(", ");

    if (direction === "IN") {
      parking[carNumber] = carNumber;
    } else {
      delete parking[carNumber];
    }
  }
  const sorted = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]));
  if (sorted.length) {
    for (const el of sorted) {
      console.log(el[0]);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
