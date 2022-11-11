function revealWords(words, sentence) {
  const wordsArray = sentence.split(" ");
  wordsArray.forEach((word) => {
    let replacementWords = words.split(", ");
    for (const el of replacementWords) {
      if (word === "*".repeat(word.length) && word.length === el.length) {
        sentence = sentence.replace(word, el);
      }
    }
  });
  console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);
