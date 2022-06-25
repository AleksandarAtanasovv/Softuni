function numbersDivisibleByNine(input){
    let n = Number(input[0]);
    let a = Number(input[1]);
    let sum = 0;
    let outPut = '';
    for(let i = n; i <= a; i++){
        if(i % 9 === 0){
            sum += i;
            outPut += i + "\n";
        }
    }
    for (let index = 0; index < outPut.length; index++) {
        console.log();
        
    }
    console.log(`The sum: ${sum}`);
    console.log(outPut);
}
numbersDivisibleByNine(["100", "200"])