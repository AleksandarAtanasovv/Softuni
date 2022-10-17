function memoryGame(arr) {
  let sequence = arr.shift().split(" ");
  let line = arr.shift();
  let moves = 0;
  while (sequence.length > 1 && line !== "end") {
    let [index1, index2] = line.split(" ");
    index1 = Number(index1);
    moves++;
    index2 = Number(index2);
    if (
      index1 < 0 ||
      index1 >= sequence.length ||
      index1 === index2 ||
      index2 < 0 ||
      index2 >= sequence.length
    ) {
      let middleIndex = Math.trunc(sequence.length / 2);
      sequence.splice(middleIndex, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      if (sequence[index1] === sequence[index2]) {
        let element = "l";
        if (index1 > index2) {
          element = sequence.splice(index1, 1);
          sequence.splice(index2, 1);
        } else {
          sequence.splice(index2, 1);
          element = sequence.splice(index1, 1);
        }
        console.log(`Congrats! You have found matching elements - ${element}!`);
      } else if (sequence[index1] !== sequence[index2]) {
        console.log("Try again!");
      }
    }

    line = arr.shift();
  }
  if (sequence.length === 0 || (sequence.length === 1 && line !== "end")) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(`${sequence.join(" ")}`);
  }
}
memoryGame([
  "a 2 4 a 2 4", 
  "4 0", 
  "0 2",
  "0 1",
  "0 1", 
  "end"
  ]
  );
