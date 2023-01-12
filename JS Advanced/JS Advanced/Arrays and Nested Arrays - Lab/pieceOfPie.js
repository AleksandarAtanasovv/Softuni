function pieceOfPie(arr, start, end) {
  const startIndex = arr.indexOf(start);
  const endIndex = arr.indexOf(end);

  return arr.slice(startIndex, endIndex + 1);
}
console.log(
  pieceOfPie(
    ["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
