function countStringOccurrences(string, count) {
  let words = string.split(" ");
  let count = 0;

  for (const el of words) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
