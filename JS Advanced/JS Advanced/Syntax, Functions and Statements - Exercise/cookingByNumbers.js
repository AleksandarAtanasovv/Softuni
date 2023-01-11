function cookingByNumbers(...params) {
  let num = Number(params.shift());
  const functions = {
    chop() {
      num /= 2;
    },
    dice() {
      num = Math.sqrt(num);
    },
    spice() {
      num += 1;
    },
    bake() {
      num *= 3;
    },
    fillet() {
      num -= num * 0.2;
    },
  };
  params.forEach((element) => {
    functions[element]();
    console.log(num);
  });
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
