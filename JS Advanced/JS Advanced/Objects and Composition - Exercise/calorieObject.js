function calorieObject(arr) {
  let name = "";
  let kcal = 0;
  const obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    name = arr[i];
    kcal = arr[i + 1];
    obj[name] = Number(kcal);
  }
  return obj;
}
console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
