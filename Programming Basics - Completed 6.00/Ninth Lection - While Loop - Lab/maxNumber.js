function maxNumber(input){
    let index = 0;
    let nums = input[index]
    let minNum = Number.MIN_SAFE_INTEGER;
    while(nums !== 'Stop'){
        let currentNumber = Number(input[index])
        if(currentNumber > minNum){
            minNum = currentNumber
        }
        nums = input[index];
        index++
        
    }
    console.log(minNum);
}

maxNumber(["45",
"-20",
"7",
"99",
"Stop"])


