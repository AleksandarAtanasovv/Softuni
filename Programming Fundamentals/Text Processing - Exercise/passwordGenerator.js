function passwordGenerator(arr) {
  const firstWord = arr[0];
  const secondWord = arr[1];
  const thirdWord = arr[2].toUpperCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let index = 0;
  let password = firstWord.concat(secondWord).toLowerCase();
  for (const el of password) {
    if (vowels.includes(el)) {
      password = password.replace(el, thirdWord[index++]);
    }
    if (thirdWord[index] === undefined) {
      index = 0;
    }
  }
  const readyPassword = password.split("").reverse().join("");
  console.log(`Your generated password is ${readyPassword}`);
}
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
