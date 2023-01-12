function diagonalSums(matrix) {
  let mainSum = 0;
  let secondarySum = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainSum += matrix[i][i];
  }
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    secondarySum += matrix[i][i];
  }
  console.log(mainSum + " " + secondarySum);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
