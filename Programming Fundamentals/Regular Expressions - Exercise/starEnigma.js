function starEnigma(input) {
  const amountOfMessages = Number(input.shift());
  const countPattern = /[star]/gi;
  const patternAfterDecryption = /@(?<planetName>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attackType>[A|D])![^@:!\->]*\->(?<soldiers>\d+)/g;
  let newWord = "";
  const newWords = [];
  for (const el of input) {
    if (countPattern.test(el) === false) {
      newWords.push(el);
    } else {
      const matches = el.match(countPattern);

      for (const el2 of el) {
        let char = el2.charCodeAt() - matches.length;
        newWord += String.fromCharCode(char);
      }
      if (countPattern.test(el) === false) {
        newWords.push(el);
      } else {
        newWords.push(newWord);
      }
      newWord = "";
    }
  }
  let attacked = 0;
  let destroyed = 0;
  let attackedPlanetNames = [];
  let destroyedPlanetNames = [];
  for (const word of newWords) {
    for (const el of word.matchAll(patternAfterDecryption)) {
      if (el.groups.attackType === "A") {
        attacked++;
        attackedPlanetNames.push(el.groups.planetName);
      } else if (el.groups.attackType === "D") {
        destroyed++;
        destroyedPlanetNames.push(el.groups.planetName);
      }
    }
  }
  attackedPlanetNames.sort((a, b) => a.localeCompare(b));
  destroyedPlanetNames.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attacked}`);
  if (attackedPlanetNames.length >= 1) {
    console.log(`-> ${attackedPlanetNames.join("\n-> ")}`);
  }
  console.log(`Destroyed planets: ${destroyed}`);
  if (destroyedPlanetNames.length >= 1) {
    console.log(`-> ${destroyedPlanetNames.join("\n-> ")}`);
  }
}
starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR", "@ped:3000!D!->4000NM"]);
