function serializeString([letters]) {
  let obj = {};
  for (let i = 0; i < letters.length; i++) {
    if (obj.hasOwnProperty(letters[i])) {
      obj[letters[i]].push(i);
    } else {
      obj[letters[i]] = [i];
    }
  }
  for (const key in obj) {
    console.log(`${key}:${obj[key].join("/")}`);
  }
}
serializeString(["avjavamsdmcalsdm"]);
