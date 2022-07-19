function equalSumsEvenOddPosition(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
 
  let printLine = "";
  for (let i = n1; i <= n2; i++) {
    let currentNum = "" + i;
    let oddCounter = 0;
    let evenCounter = 0;
    for (let j = 0; j <= currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));
      if (j % 2 === 0) {
        evenCounter += currentDigit;
      } else {
        oddCounter += currentDigit;
      }
    }
    if (oddCounter === evenCounter) {
      printLine += `${i} `;
    }
}
console.log(printLine);
}
equalSumsEvenOddPosition(["100000", "100050"]);
