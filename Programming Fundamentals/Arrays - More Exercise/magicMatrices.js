function magicMatrices(matrix) {
  let firstColumn = 0;
  let secondColumn = 0;
  let thirdColumn = 0;
  let firstRow = 0;
  let secondRow = 0;
  let thirdRow = 0;
  let isMagicalRow = false;
  let isMagicalColumn = false;
  for (let i = 0; i < matrix.length; i++) {
    firstRow += Number(matrix[i][0]);
    secondRow += Number(matrix[i][1]);
    thirdRow += Number(matrix[i][2]);
    if (firstRow === secondRow && firstRow === thirdRow) {
      isMagicalRow = true;
    } else {
      isMagicalRow = false;
    }

    for (let column = 0; column < matrix[i].length; column++) {
      firstColumn += Number(matrix[i][0]);
      secondColumn += Number(matrix[i][1]);
      thirdColumn += Number(matrix[i][2]);
      if (isMagicalRow) {
        if (firstColumn == secondColumn && firstColumn == thirdColumn) {
          isMagicalColumn = true;
        } else {
          isMagicalColumn = false;
        }
      }
    }
  }
  if (isMagicalColumn && isMagicalRow) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
