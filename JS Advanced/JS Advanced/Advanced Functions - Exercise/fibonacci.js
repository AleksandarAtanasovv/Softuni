function getFibonator() {
  let currNumber = 1;
  let prevNumber = 0;
  return function fib() {
    let fibNumber = currNumber + prevNumber;
    currNumber = prevNumber;
    prevNumber = fibNumber;
    return fibNumber;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
