const sumFirstLast = (arr) => [arr[0], arr[arr.length - 1]].map(Number).reduce((a, v) => a + v, 0);
console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
