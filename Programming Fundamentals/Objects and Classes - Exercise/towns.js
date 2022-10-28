function towns(towns) {
  towns.forEach((town) => {
    let townObj = {};
    let [name, lat, long] = town.split(" | ");
    townObj.town = name;
    townObj.lat = Number(lat).toFixed(2);
    townObj.long = Number(long).toFixed(2);
    console.log(townObj);
  });
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
