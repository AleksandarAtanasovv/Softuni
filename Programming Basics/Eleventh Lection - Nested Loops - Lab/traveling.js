function traveling(input) {
  let command = input[0];
  let budget = Number(input[1]);
  let totalSaved = 0;
  let index = 1;
  while (command !== 'End') {
    index++

    while (totalSaved < budget) {
      totalSaved += Number(input[index])
      index++;
    }

    console.log(`Going to ${command}!`);
    command = input[index];
    index++;
    budget = Number(input[index])
    totalSaved = 0;
  }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
