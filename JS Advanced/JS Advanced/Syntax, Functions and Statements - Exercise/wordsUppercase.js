function wordsUppercase(sentence) {
  return sentence.match(/[\w]+/g).join(", ").toUpperCase();
}
console.log(wordsUppercase("Hi, how are you?"));
