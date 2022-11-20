function worldTour(arr) {
  let stops = arr.shift();
  let line = arr.shift();
  while (line !== "Travel") {
    let [command, index, string] = line.split(":");

    switch (command) {
      case "Add Stop":
        if (index < stops.length && index >= 0) {
          index = Number(index);
          stops = stops.split("");
          stops.splice(index, 0, string);
          stops = stops.join("");
        }
        console.log(stops);
        break;
      case "Remove Stop":
        if (index < stops.length && index >= 0 && Number(string) >= 0 && Number(string) < stops.length) {
          let index2 = Number(string);
          const wordToRemove = stops.substring(index, index2 + 1);
          stops = stops.replace(wordToRemove, "");
        }
        console.log(stops);
        break;
      case "Switch":
        if (stops.includes(index)) {
          let regex = new RegExp(index, "g");
          stops = stops.replace(regex, string);
        }
        console.log(stops);
        break;
    }
    line = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
