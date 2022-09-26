function equalArrays(firstArray, secondArray) {
  let sum = 0;
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = Number(firstArray[i]);
  }
  for (let j = 0; j < secondArray.length; j++) {
    secondArray[j] = Number(secondArray[j]);
  }
  let notEqual = false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      notEqual = true;
      break;
    } else {
      sum += firstArray[i];
    }
  }
  if (!notEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1"], ["10"]);
