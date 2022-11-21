function passwordReset(arr) {
  let password = arr.shift();
  let line = arr.shift();
  while (line !== "Done") {
    const [command, index, length] = line.split(" ");
    switch (command) {
      case "TakeOdd":
        let newPass = "";
        for (let i = 0; i < password.length; i++) {
          if (i % 2 !== 0) {
            newPass += password[i];
          }
        }
        password = newPass;
        console.log(password);
        break;
      case "Cut":
        let cutPart = password.split("").splice(index, length).join("");

        let currentPass = password.replace(cutPart, "");
        console.log(currentPass);
        password = currentPass;
        break;
      case "Substitute":
        const regexSubs = new RegExp(`['\'${index}]+`, "g");

        if (regexSubs.test(password)) {
          password = password.split(index).join(length);
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }
    line = arr.shift();
  }
  console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]);
