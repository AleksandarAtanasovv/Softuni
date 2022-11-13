function valueOfAString([sentence, type]) {
  let sum = 0;
  for (const el of sentence) {
    if (type === "LOWERCASE") {
      if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
        sum += el.charCodeAt();
      }
    } else {
      if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
        sum += el.charCodeAt();
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfAString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
