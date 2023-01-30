function calculator() {
  let resultField = null;
  let num1 = null;
  let num2 = null;
  return {
    init: (selector1, selector2, res) => {
      num1 = document.querySelector(selector1);
      num2 = document.querySelector(selector2);
      resultField = document.querySelector(res);
    },
    add: () => {
      resultField.value = Number(num1.value) + Number(num2.value);
    },
    subtract: () => {
      resultField.value = Number(num1.value) - Number(num2.value);
    },
  };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
