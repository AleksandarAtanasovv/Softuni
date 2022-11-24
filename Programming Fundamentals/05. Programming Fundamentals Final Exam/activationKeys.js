function activationKeys(arr) {
  let activationKey = arr.shift();
  let line = arr.shift();
  while (line !== "Generate") {
    const [command, ...rest] = line.split(">>>");
    switch (command) {
      case "Contains":
        {
          const subString = rest[0];
          if (activationKey.includes(subString)) {
            console.log(`${activationKey} contains ${subString}`);
          } else {
            console.log("Substring not found!");
          }
        }
        break;
      case "Flip":
        {
          const type = rest[0] == "Upper" ? "Upper" : "Lower";
          const startIndex = Number(rest[1]);
          const endIndex = Number(rest[2]);
          const subString = activationKey.substring(startIndex, endIndex);
          if (type === "Upper") {
            activationKey = activationKey.replace(subString, subString.toUpperCase());
          } else {
            activationKey = activationKey.replace(subString, subString.toLowerCase());
          }
          console.log(activationKey);
        }
        break;
      case "Slice":
        {
          const startIndex = Number(rest[0]);
          const endIndex = Number(rest[1]);
          const subString = activationKey.substring(startIndex, endIndex);
          activationKey = activationKey.replace(subString, "");
          console.log(activationKey);
        }
        break;
    }
    line = arr.shift();
  }
  console.log("Your activation key is:", activationKey);
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

