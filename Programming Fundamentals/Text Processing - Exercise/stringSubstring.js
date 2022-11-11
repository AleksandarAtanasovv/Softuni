function stringSubstring(word, sentence) {
  const match = sentence
    .split(" ")
    .map((x) => x.toLowerCase())
    .includes(word.toLowerCase());
  if (match) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring('python',
'JavaScript is the best programming language'
);
