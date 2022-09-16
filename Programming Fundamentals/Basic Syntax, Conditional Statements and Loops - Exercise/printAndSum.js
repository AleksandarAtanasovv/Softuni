function printAndSum(min, max) {
  let str = "";
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i
    str += `${i} `
  }
  console.log(str);
  console.log(`Sum: ${sum}`);
}
printAndSum();
