function wordTracker(arr) {
  const word = arr.shift().split(" ");
  const words = {};
  for (const el of word) {
    words[el] = 0;
  }
  for (const el of arr) {
    if (words.hasOwnProperty(el)) {
      words[el] += 1;
    }
    console.log();
  }
  const sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
  sorted.forEach((el) => {
    console.log(`${el[0]} - ${el[1]}`);
  });
}
wordTracker(["this sentence", "In", "this", "sentence", "you", "have", "to", "count", "the", "occurrences", "of", "the", "words", "this", "and", "sentence", "because", "this", "is", "your", "task"]);
