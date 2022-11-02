function wordOccurrences(arr) {
  const occurances = {};
  for (const el of arr) {
    if (occurances[el]) {
      occurances[el] += 1;
    } else {
      occurances[el] = 1;
    }
  }
  const sorted = Object.entries(occurances).sort((a, b) => b[1] - a[1]);
  for (const el of sorted) {
    console.log(`${el[0]} -> ${el[1]} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
