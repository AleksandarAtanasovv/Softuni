function substitute(input) {
  let k = Number(input[0]);
  let l = Number(input[1]);
  let M = Number(input[2]);
  let n = Number(input[3]);
  let sub = 0;
  for (let i = k; i <= 8; i++) {
    for (let j = 9; j >= l; j--) {
      for (let s = M; s <= 8; s++) {
        for (let h = 9; h >= n; h--) {
          let one = `${i}${j}`;
          let two = `${s}${h}`;
          if (i % 2 === 0 && s % 2 === 0) {
            if (j % 2 == 1 && h % 2 == 1) {
              if (one !== two) {
                console.log(`${one} - ${two}`);
                change = true;
                sub++;
              } else if (sub >= 6) {
                break;
              } else if(sub < 6){
                console.log("Cannot change the same player.");
              }
            }
          }
          if(sub >= 6){
            break
          }
        }
        if (sub >= 6) {
          break;
        }
    }
    if(sub >= 6){
        break
    }
    }
    if(sub >= 6){
        break;
    }
}
}
substitute(["6",
"7",
"5",
"6"])



