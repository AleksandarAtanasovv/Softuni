function sortAnArrayby2Criteria(arr) {
  return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n");
}
console.log(sortAnArrayby2Criteria(["alpha", "beta", "gamma"]));
