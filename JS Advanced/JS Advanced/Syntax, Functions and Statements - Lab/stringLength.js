function stringLength(p1, p2, p3) {
  const totalLength = p1.length + p2.length + p3.length;
  const avgLength = Math.round(totalLength / 3);
  console.log(totalLength);
  console.log(avgLength);
}
stringLength("chocolate", "ice cream", "cake");
