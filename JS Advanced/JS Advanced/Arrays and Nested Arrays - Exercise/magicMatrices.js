function magicMatrices(matrix) {
  let rows = 0;
  let cols = 0;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i].join("");
    for (let j = 0; j < row.length; j++) {
      rows += Number(row[j]);
      cols += Number(row[0]);
    }
  }
  return rows === cols ? "true" : "false";
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
