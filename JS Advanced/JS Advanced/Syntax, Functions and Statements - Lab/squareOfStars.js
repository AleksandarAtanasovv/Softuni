function squareOfStars(size) {
  let newSize = size;
  if (newSize === undefined) {
    newSize = 5;
  }
  for (let i = 0; i < newSize; i++) {
    console.log("* ".repeat(newSize).trim());
  }
}
squareOfStars(5);
