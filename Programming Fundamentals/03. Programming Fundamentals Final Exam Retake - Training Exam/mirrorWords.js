function mirrorWords(arr) {
  let string = arr.shift();
  const matchingPairsPattern = /([@#])(?<word>[A-Za-z]{3,}\1\1[A-Za-z]{3,})\1/g;
  const matches = string.matchAll(matchingPairsPattern);
  let amountOfPairs = 0;
  const mirrorWords = {};
  let amountOfMirroredWords = 0;
  for (const match of matches) {
    const reg = /[#@]/g;
    let parsedMatch = match[0].replace(reg, " ").split(" ");
    if (parsedMatch[1] === parsedMatch[3].split("").reverse().join("")) {
      mirrorWords[parsedMatch[1]] = parsedMatch[3];
      amountOfMirroredWords++;
    }
    amountOfPairs++;
  }

  let endStr = "";
  if (amountOfPairs >= 1) {
    console.log(`${amountOfPairs} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (Object.keys(mirrorWords).length) {
    console.log("The mirror words are:");
    let index = 0;
    for (const key in mirrorWords) {
      index++;
      if (index === amountOfMirroredWords) {
        endStr += `${key} <=> ${mirrorWords[key]}`;
      } else {
        endStr += `${key} <=> ${mirrorWords[key]}, `;
      }
    }
    console.log(endStr);
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
