function furniture(arr) {
  const pattern = />>(?<furnitureName>[A-Z]+\w+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
  let total = 0;

  console.log("Bought furniture:");
  for (const el of arr) {
    for (const item of el.matchAll(pattern)) {
      console.log(item[1]);
      total += Number(item.groups.price) * Number(item.groups.quantity);
    }
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture([">>Laptop<<312.2323!3", ">>TV<<300.21314!5", ">Invalid<<!5", ">>TV<<300.21314!20", ">>Invalid<!5", ">>TV<<30.21314!5", ">>Invalid<<!!5", "Purchase"]);
