function modernTimesOfHashTag(sentence) {
  const words = sentence.split(" ");
  words.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      let result = "";
      let currentResult = "";
      let isValid = true;
      let currentWord = word;
      for (let i = 1; i < word.length; i++) {
        if (word[i].toLowerCase().charCodeAt() < 97 || word[i].toLowerCase().charCodeAt() > 122) {
          break;
          isValid = false;
        } else {
          result += word[i];
        }
      }
      if (`#${result}` === currentWord && isValid) {
        console.log(result);
      }
    }
  });
}
modernTimesOfHashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
