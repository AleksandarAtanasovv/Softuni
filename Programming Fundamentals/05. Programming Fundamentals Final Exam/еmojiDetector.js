function emojiDetector(arr) {
  const emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
  const coolThreshHold = arr[0].match(/\d/g).reduce((acc, sum) => acc * sum, 1);
  const matches = arr[0].matchAll(emojiPattern);
  const coolEmojis = [];
  let totalEmojis = 0;
  for (const match of matches) {
    let sum = 0;
    totalEmojis++;
    for (let i = 0; i < match[2].length; i++) {
      sum += match[2].charCodeAt(i);
    }
    if (sum >= coolThreshHold) {
      coolEmojis.push(match[0]);
    }
  }
  console.log(`Cool threshold: ${coolThreshHold}`);
  console.log(`${totalEmojis} emojis found in the text. The cool ones are:`);
  console.log(coolEmojis.join("\n"));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
