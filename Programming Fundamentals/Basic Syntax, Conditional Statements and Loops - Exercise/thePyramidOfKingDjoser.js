function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let totalRows = 0;
  let firstLayer = base;
  let totalMarble = 0;
  let totalStone = 0;
  while (firstLayer > 2) {
    marble = firstLayer * 4 - 4;
    stone = firstLayer * firstLayer - marble;
    totalStone += stone;

    totalRows++;
    if (totalRows % 5 === 0) {
      lapis += marble;
    } else {
      totalMarble += marble;
    }
    firstLayer -= 2;
  }
  totalRows++;
  gold = firstLayer * firstLayer;

  totalRows *= increment;
  lapis *= increment;
  totalStone *= increment;
  totalMarble *= increment;
  gold *= increment;

  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(totalRows)}`);
}
thePyramidOfKingDjoser(23, 0.5);
