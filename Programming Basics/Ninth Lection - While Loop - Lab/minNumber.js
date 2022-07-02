function minNumber(input){
    let index = 0;
    let inputValue = input[index];
    let maxNum = Number.MAX_SAFE_INTEGER;

    while(inputValue !== 'Stop'){
        let currentNum = Number(input[index]);
        if(currentNum < maxNum){
            maxNum = currentNum;
        }
        inputValue = input[index];
        index++
    }
    console.log(maxNum);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
