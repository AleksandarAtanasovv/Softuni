function areaAndVolumeCalculator(areaFunc, volFunc, coordsJSON) {
  const coords = JSON.parse(coordsJSON);
  return coords.map((figure) => ({
    area: areaFunc.call(figure),
    volume: volFunc.call(figure),
  }));
}
console.table(
  areaAndVolumeCalculator(
    area,
    vol,
    `[
      {"x":"1","y":"2","z":"10"},
      {"x":"7","y":"7","z":"10"},
      {"x":"5","y":"2","z":"10"}
      ]`
  )
);
function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
