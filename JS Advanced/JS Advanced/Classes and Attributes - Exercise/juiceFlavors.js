function juiceFlavors(juices) {
  let quantityInStock = 0;
  const juicesObj = {};
  const bottles = {};
  juices.forEach((element) => {
    let [juiceName, juiceQuantity] = element.split(" => ");
    juiceQuantity = Number(juiceQuantity);
    if (!juicesObj.hasOwnProperty(juiceName)) {
      juicesObj[juiceName] = juiceQuantity;
    } else {
      juicesObj[juiceName] += juiceQuantity;
    }
    if (juicesObj[juiceName] >= 1000) {
      bottles[juiceName] = Math.trunc(juicesObj[juiceName] / 1000);
    }
  });
  for (const key in bottles) {
    console.log(`${key} => ${bottles[key]}`);
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
