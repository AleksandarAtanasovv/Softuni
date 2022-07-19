function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCount = 0;
    let isFound = false
    for(let i = start; i <= finish; i++){
        for(let j = start; j <= finish; j++){
            combinationsCount++
            if(i + j == magicNumber){
                console.log(`Combination N:${combinationsCount} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
    console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])
