function add(num) {
  let res = num;
  function calculate(num2) {
    res += num2;
    return calculate;
  }
  calculate.toString = function () {
    return res;
  };
  return calculate;
}
add(1);
add(1)(6)(-3);
