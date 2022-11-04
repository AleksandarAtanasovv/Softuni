function oddOccurrences(arr) {
  const matches = {};
  const words = arr.split(" ").map((x) => x.toLowerCase());

  for (const word of words) {
    matches[word] = 0;
  }
  for (const word of words) {
    if (!matches.hasOwnProperty(word)) {
      matches[word] = 1;
    } else {
      matches[word] += 1;
    }
  }
  const matchesArr = [];
  const sorted = Object.entries(matches).sort((a, b) => b[1] - a[1]);
  for (const el of sorted) {
    if (el[1] % 2 !== 0) {
      matchesArr.push(el[0]);
    }
  }
  console.log(matchesArr.join(" "));
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
