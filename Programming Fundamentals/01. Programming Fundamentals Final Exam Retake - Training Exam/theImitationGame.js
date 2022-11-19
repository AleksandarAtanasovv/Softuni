function theImitationGame(arr) {
  let message = arr.shift();
  let line = arr.shift();
  while (line !== "Decode") {
    let [command, amtOfLettersOrIndex, replacement] = line.split("|");
    switch (command) {
      case "Move":
        amtOfLettersOrIndex = Number(amtOfLettersOrIndex);

        message = message.split("");
        message.push(...message.splice(0, amtOfLettersOrIndex));
        message = message.join("");
        break;
      case "Insert":
        amtOfLettersOrIndex = Number(amtOfLettersOrIndex);

        message = message.split("");
        message.splice(amtOfLettersOrIndex, 0, replacement);
        message = message.join("");
        break;
      case "ChangeAll":
        message = message.split("");
        message = message.map((x) => x.replace(amtOfLettersOrIndex, replacement));
        message = message.join("");
        break;
    }
    line = arr.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
