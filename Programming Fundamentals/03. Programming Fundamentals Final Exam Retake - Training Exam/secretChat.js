function secretChat(input) {
  let initialString = input.shift();
  let line = input.shift();
  while (line !== "Reveal") {
    let [command, indexOrSubstring, replacement] = line.split(":|:");

    switch (command) {
      case "InsertSpace":
        indexOrSubstring = Number(indexOrSubstring);
        initialString = initialString.split("");
        initialString.splice(indexOrSubstring, 0, " ");
        initialString = initialString.join("");
        console.log(initialString);
        break;
      case "Reverse":
        const regex = new RegExp(indexOrSubstring);
        if (regex.test(initialString)) {
          let stringToManipulate = initialString.match(regex);
          let reversedString = stringToManipulate[0].split("").reverse().join("");
          initialString = initialString.replace(regex, "");
          initialString += reversedString;
          console.log(initialString);
        } else {
          console.log("error");
        }
        break;
      case "ChangeAll":
        indexOrSubstring = indexOrSubstring.toString();
        const regexP = new RegExp(indexOrSubstring, "g");
        initialString = initialString.replace(regexP, replacement);
        console.log(initialString);
        break;
    }
    line = input.shift();
  }
  console.log(`You have a new text message: ${initialString}`);
}
secretChat(["heVVodar!gniV", "ChangeAll:|:V:|:l", "Reverse:|:!gnil", "InsertSpace:|:5", "Reveal"]);
