function MinerTask(arr) {
  const resources = {};
  arr.forEach((element, index) => {
    if (index % 2 === 0) {
      resources[element] = 0;
    }
  });
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 !== 0) {
      if (resources.hasOwnProperty(arr[index - 1])) {
        resources[arr[index - 1]] += Number(arr[index]);
      } else {
        resources[arr[index - 1]] = Number(arr[index]);
      }
    }
  }
  for (const key in resources) {
    console.log(`${key} -> ${resources[key]}`);
  }
}
MinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
