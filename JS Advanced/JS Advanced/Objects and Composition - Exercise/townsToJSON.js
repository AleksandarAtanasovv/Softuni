function townsToJSON(arr) {
  const res = [];
  arr.shift();
  arr.forEach((element) => {
    let [town, lat, long] = element.split(/\s*\|\s*/).filter((x) => x.length > 0);
    lat = Number(lat).toFixed(2);
    long = Number(long).toFixed(2);
    res.push({
      Town: town,
      Latitude: Number(lat),
      Longitude: Number(long),
    });
  });
  return JSON.stringify(res);
}
console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
