function listOfNames(names) {
  return names
    .sort((a, b) => a.localeCompare(b))
    .map((el, i) => `${i + 1}.${el}`)
    .join("\n");
}
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
