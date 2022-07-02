function sumNumbers(input){
    let num = Number(input[0]);
    let index = 1;
    let totalSum = 0;
    while(num > totalSum){
        let nums = Number(input[index]);
        index++
        totalSum = totalSum + nums
        
    }
    console.log(totalSum);
    
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

