function sumOfNumbers(input){
    let nums = input[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        
        sum += Number(nums[i]);
        
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])