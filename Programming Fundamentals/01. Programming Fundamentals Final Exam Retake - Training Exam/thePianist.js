function thePianist(input) {
  let amountOfPieces = Number(input.shift());
  let pieces = {};
  let piecesArr = [];
  for (let i = 0; i < amountOfPieces; i++) {
    const [piece, composer, key] = input.shift().split("|");
    pieces[piece] = {
      piece,
      composer,
      key,
    };
  }
  let line = input.shift();
  while (line !== "Stop") {
    const [command, piece, composer, key] = line.split("|");
    switch (command) {
      case "Add":
        if (!pieces[piece]) {
          pieces[piece] = {
            piece,
            composer,
            key,
          };
          console.log(`${piece} by ${composer} in ${key} added to the collection!`);
          break;
        } else {
          console.log(`${piece} is already in the collection!`);
        }
        break;
      case "Remove":
        if (pieces[piece]) {
          delete pieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        break;
      case "ChangeKey":
        if (pieces[piece]) {
          pieces[piece].key = composer;
          console.log(`Changed the key of ${piece} to ${composer}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        break;
    }
    line = input.shift();
  }
  for (const el of Object.values(pieces)) {
    console.log(`${el.piece} -> Composer: ${el.composer}, Key: ${el.key}`);
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
