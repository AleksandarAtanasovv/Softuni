function cutAndReverse(str) {
  let middle = str.length / 2;
  let firstHalf = str.substring(0, middle);
  let secondHalf = str.substring(middle);
  console.log(firstHalf.split("").reverse().join(""));
  console.log(secondHalf.split("").reverse().join(""));
}
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
