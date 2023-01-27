function solution(number) {
  let newNumber = number;
  return function add(num) {
    return newNumber + num;
  };
}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
