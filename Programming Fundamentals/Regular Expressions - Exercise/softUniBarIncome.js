function softUniBarIncome(input) {
  const pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
  let line = input.shift();
  let total = 0;

  while (line !== "end of shift") {
    const entry = line.matchAll(pattern);
    for (const person of entry) {
      console.log(`${person.groups.customer}: ${person.groups.product} - ${(person.groups.price * person.groups.count).toFixed(2)}`);
      total += Number(person.groups.price) * Number(person.groups.count);
    }

    line = input.shift();
  }
  console.log("Total income: " + total.toFixed(2));
}
softUniBarIncome(["%InvalidName%<Croissant>|2|10.3$", "%Peter%<Gum>1.3$", "%Maria%<Cola>|1|2.4", "%Valid%<Valid>valid|10|valid20$", "end of shift"]);
