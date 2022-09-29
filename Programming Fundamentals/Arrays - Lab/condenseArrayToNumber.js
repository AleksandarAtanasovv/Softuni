function condenseArrayToNumber(nums) {
  let num = [];
  if (nums.length === 1) {
    console.log(nums[0]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    num[i] = Number(nums[i]);
  }

  while (num.length > 1) {
    let condensed = [];
    for (let i = 0; i < num.length - 1; i++) {
      condensed[i] = Number(num[i] + num[i + 1]);
    }
    num = condensed;
    condensed = 0;
  }

  console.log(num[0]);
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
