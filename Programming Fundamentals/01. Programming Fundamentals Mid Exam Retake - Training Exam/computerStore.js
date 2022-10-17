function computerStore(arr) {
  let line = arr.shift();
  let priceWithoutTax = 0;
  let isGuestSpecial = false;
  if (arr.includes("special")) {
    isGuestSpecial = true;
  }
  while (line !== "special" && line !== "regular") {
    if (Number(line) < 0) {
      console.log("Invalid price!");
    } else {
      priceWithoutTax += Number(line);
    }
    line = arr.shift();
  }
  let tax = priceWithoutTax * 0.2;
  let totalPriceWithTax = priceWithoutTax + tax;
  if (isGuestSpecial) {
    totalPriceWithTax *= 0.9;
  }
  if (totalPriceWithTax <= 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
  }
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
