function chessBoard(num) {
  let currentColor = "black";
  let prevColor = "";
  console.log('<div class="chessboard">');
  for (let rows = 1; rows <= num; rows++) {
    console.log("  <div>");
    for (let columns = 1; columns <= num; columns++) {
      console.log(`    <span class="${currentColor}"></span>`);
      prevColor = currentColor;
      currentColor = prevColor === "black" ? "white" : "black";
    }
    console.log("  </div>");
    if (num % 2 === 0) {
      prevColor = currentColor;
      currentColor = prevColor === "black" ? "white" : "black";
    }
  }
  console.log("</div>");
}
chessBoard(3);
