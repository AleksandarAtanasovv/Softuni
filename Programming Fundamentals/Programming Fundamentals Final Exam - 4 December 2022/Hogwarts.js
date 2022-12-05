function Hogwarts(arr) {
  let spell = arr.shift();
  let line = arr.shift();
  while (line !== "Abracadabra") {
    let [command, index, letter] = line.split(" ");

    switch (command) {
      case "Abjuration":
        let newStr = "";
        for (const el of spell) {
          newStr += el.toUpperCase();
        }
        spell = newStr;
        console.log(spell);
        break;
      case "Necromancy":
        let newString = "";
        for (const el of spell) {
          newString += el.toLowerCase();
        }
        spell = newString;
        console.log(spell);
        break;
      case "Illusion":
        let currentIndex = Number(index);
        if (spell[currentIndex] && currentIndex >= 0) {
          let letterOfSpell = spell[currentIndex];
          spell = spell.replace(letterOfSpell, letter);
          console.log("Done!");
        } else {
          console.log("The spell was too weak.");
        }
        break;
      case "Divination":
        const regex = new RegExp(index, "g");
        if (regex.test(spell)) {
          spell = spell.replace(regex, letter);
          console.log(spell);
        }
        break;
      case "Alteration":
        const regexp = new RegExp(index, "g");
        if (regexp.test(spell)) {
          spell = spell.replace(regex, "");
          console.log(spell);
        }
        break;
      default:
        console.log("The spell did not work!");
    }
    line = arr.shift();
  }
}
Hogwarts(["A7ci0", "Illusion 1 c", "Illusion 4 o", "Abjuration", "Abracadabra"]);
