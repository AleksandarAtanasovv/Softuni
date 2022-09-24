function triangleArea(side1, side2, side3) {
  let semiPerim = (side1 + side2 + side3) / 2;

  let area = Math.sqrt(
    semiPerim * (semiPerim - side1) * (semiPerim - side2) * (semiPerim - side3)
  );
  console.log(area);
}
triangleArea(3, 5.5, 4);
