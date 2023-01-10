function aggregateElements(arr) {
  const sumAll = () => {
    let result = 0;
    arr.forEach((element) => {
      result += Number(element);
    });
    return result;
  };
  const conCat = () => {
    let result = "";
    arr.forEach((element) => {
      result += element.toString();
    });
    return result;
  };
  const sumInverse = () => {
    let result = 0;
    arr.forEach((element) => {
      result += 1 / Number(element);
    });
    return result;
  };
  console.log(sumAll());
  console.log(sumInverse());
  console.log(conCat());
}
aggregateElements([1, 2, 3]);
