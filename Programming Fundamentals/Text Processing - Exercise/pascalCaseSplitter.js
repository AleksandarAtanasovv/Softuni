function pascalCaseSplitter(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].charCodeAt() > 65 && sentence[i].charCodeAt() < 90) {
      if (i !== 0) {
        result += ", ";
      }
      result += sentence[i];
    } else {
      result += sentence[i];
    }
  }
  console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
