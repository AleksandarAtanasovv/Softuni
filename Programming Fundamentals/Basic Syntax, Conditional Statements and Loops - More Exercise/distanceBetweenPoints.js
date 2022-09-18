function distanceBetweenPoints(x1, y1, x2, y2) {
  let y = Math.abs(x2 - x1);
  let x = Math.abs(y2 - y1);

  return Math.sqrt(x * x + y * y);
}
distanceBetweenPoints(2, 4, 5, 0);
